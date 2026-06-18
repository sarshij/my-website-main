import * as THREE from 'three';

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(32, 32, 30, 0, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
  return new THREE.CanvasTexture(canvas);
}

class CyberCanvas {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 30;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.particles = [];
    // Fewer particles on mobile for smooth 60fps
    this.particleCount = window.innerWidth < 768 ? 60 : 180;
    
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    this.init();
    this.animate();
    this.addEvents();
  }

  init() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    
    const colorPrimary = new THREE.Color('#00ced1'); // Cyan
    const colorSecondary = new THREE.Color('#8a2be2'); // Purple

    for(let i = 0; i < this.particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
      
      this.particles.push({
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04),
        originalPos: new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom material for glowing dots
    const material = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: createCircleTexture(),
      alphaTest: 0.01,
      blending: THREE.AdditiveBlending,
      depthWrite: false // Prevent depth sorting issues with additive blending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
    
    // Lines between close particles — use DynamicDrawUsage to reduce GC pressure
    this.lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    this.lineGeometry = new THREE.BufferGeometry();
    // Pre-allocate max possible line buffer (n*(n-1)/2 segments × 2 vertices × 3 floats)
    const maxLines = this.particleCount * 8; // generous upper bound
    this._linePosBuf = new Float32Array(maxLines * 6);
    this._lineColBuf = new Float32Array(maxLines * 6);
    this.lineGeometry.setAttribute('position', new THREE.BufferAttribute(this._linePosBuf, 3).setUsage(THREE.DynamicDrawUsage));
    this.lineGeometry.setAttribute('color',    new THREE.BufferAttribute(this._lineColBuf, 3).setUsage(THREE.DynamicDrawUsage));
    this.linesMesh = new THREE.LineSegments(this.lineGeometry, this.lineMaterial);
    this.scene.add(this.linesMesh);
  }


  addEvents() {
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    
    // Add scroll parallax
    window.addEventListener('scroll', () => {
      this.camera.position.y = -(window.scrollY * 0.01);
    });
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    this.mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Smooth mouse follow
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Rotate scene slightly based on mouse
    this.scene.rotation.x = this.mouse.y * 0.1;
    this.scene.rotation.y = this.mouse.x * 0.1;

    const positions = this.particleSystem.geometry.attributes.position.array;
    
    // Animate particles
    for(let i = 0; i < this.particleCount; i++) {
      const p = this.particles[i];
      
      positions[i * 3] += p.velocity.x;
      positions[i * 3 + 1] += p.velocity.y;
      positions[i * 3 + 2] += p.velocity.z;

      // Wrap around bounds
      if(Math.abs(positions[i * 3]) > 50) p.velocity.x *= -1;
      if(Math.abs(positions[i * 3 + 1]) > 50) p.velocity.y *= -1;
      if(Math.abs(positions[i * 3 + 2]) > 25) p.velocity.z *= -1;
    }
    
    this.particleSystem.geometry.attributes.position.needsUpdate = true;
    
    // Update connections
    this.updateConnections(positions);

    this.renderer.render(this.scene, this.camera);
  }
  
  updateConnections(positions) {
    // Use pre-allocated buffers to avoid GC pressure every frame
    const linePosBuf = this._linePosBuf;
    const lineColBuf = this._lineColBuf;
    const maxDistance = 12;
    const maxDistSq = maxDistance * maxDistance;
    
    const colors = this.particleSystem.geometry.attributes.color.array;
    // Limit O(n²) check to 60 particles max → 60×59/2 = 1770 checks/frame
    const checkCount = Math.min(this.particleCount, 60);
    
    let lineCount = 0;
    const maxLineCount = (this._linePosBuf.length / 6) - 1;

    for (let i = 0; i < checkCount; i++) {
      for (let j = i + 1; j < checkCount; j++) {
        if (lineCount >= maxLineCount) break;
        const dx = positions[i * 3]     - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistSq) {
          const base = lineCount * 6;
          linePosBuf[base]     = positions[i * 3];
          linePosBuf[base + 1] = positions[i * 3 + 1];
          linePosBuf[base + 2] = positions[i * 3 + 2];
          linePosBuf[base + 3] = positions[j * 3];
          linePosBuf[base + 4] = positions[j * 3 + 1];
          linePosBuf[base + 5] = positions[j * 3 + 2];
          
          lineColBuf[base]     = colors[i * 3];
          lineColBuf[base + 1] = colors[i * 3 + 1];
          lineColBuf[base + 2] = colors[i * 3 + 2];
          lineColBuf[base + 3] = colors[j * 3];
          lineColBuf[base + 4] = colors[j * 3 + 1];
          lineColBuf[base + 5] = colors[j * 3 + 2];
          lineCount++;
        }
      }
    }
    
    // Update draw range instead of re-allocating geometry — zero GC
    const posAttr = this.lineGeometry.attributes.position;
    const colAttr = this.lineGeometry.attributes.color;
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    this.lineGeometry.setDrawRange(0, lineCount * 2);
  }

}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CyberCanvas();
});
