/**
 * three-enhanced.js — Premium 3D Scene with bloom post-processing
 * Features: enhanced particles, UnrealBloomPass, floating geometric shapes
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

class PremiumScene {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.canvas) return;

    this.isLowPerf = window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = this.isLowPerf ? 40 : 35;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: !this.isLowPerf,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isLowPerf ? 1 : 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.8;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollY = 0;
    this.clock = new THREE.Clock();

    this.particles = [];
    this.geometries = [];

    this.initScene();
    this.initPostProcessing();
    this.animate();
    this.addEvents();
  }

  initScene() {
    this.createParticles();
    if (!this.isLowPerf) {
      this.createGeometricShapes();
    }
  }

  createParticles() {
    const count = this.isLowPerf ? 80 : 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const primary = new THREE.Color('#00ced1');
    const secondary = new THREE.Color('#8a2be2');
    const gold = new THREE.Color('#ffd700');

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mix = Math.random();
      let color;
      if (mix < 0.4) color = primary.clone().lerp(secondary, Math.random());
      else if (mix < 0.7) color = secondary.clone().lerp(gold, Math.random());
      else color = gold.clone().lerp(primary, Math.random());

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = 0.3 + Math.random() * 1.0;

      this.particles.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        phase: Math.random() * Math.PI * 2,
        baseSize: sizes[i],
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create noise texture for soft particles
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    const texture = new THREE.CanvasTexture(canvas);

    this.particleMaterial = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.particleSystem = new THREE.Points(geometry, this.particleMaterial);
    this.scene.add(this.particleSystem);
  }

  createGeometricShapes() {
    // Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(2.5, 0);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00ced1,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    this.icoMesh = new THREE.Mesh(icoGeo, icoMat);
    this.icoMesh.position.set(-8, 4, -10);
    this.scene.add(this.icoMesh);

    // Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(2, 0.8, 64, 8);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    this.knotMesh = new THREE.Mesh(knotGeo, knotMat);
    this.knotMesh.position.set(9, -5, -12);
    this.scene.add(this.knotMesh);

    // Octahedron
    const octGeo = new THREE.OctahedronGeometry(2);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    this.octMesh = new THREE.Mesh(octGeo, octMat);
    this.octMesh.position.set(6, 8, -15);
    this.scene.add(this.octMesh);

    // Data grid floor
    const gridHelper = new THREE.GridHelper(40, 30, 0x00ced1, 0x8a2be2);
    gridHelper.position.y = -20;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.08;
    this.scene.add(gridHelper);
  }

  initPostProcessing() {
    if (this.isLowPerf) return;

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.3,  // strength
      0.3,  // radius
      0.1   // threshold
    );
    this.composer.addPass(this.bloomPass);
  }

  animate() {
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    // Smooth mouse
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Scene rotation
    this.scene.rotation.x = this.mouse.y * 0.08;
    this.scene.rotation.y = this.mouse.x * 0.08;

    // Update particles
    const positions = this.particleSystem.geometry.attributes.position.array;
    const sizes = this.particleSystem.geometry.attributes.size;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      positions[i * 3] += p.velocity.x + Math.sin(elapsed * 0.3 + p.phase) * 0.002;
      positions[i * 3 + 1] += p.velocity.y + Math.cos(elapsed * 0.2 + p.phase) * 0.002;
      positions[i * 3 + 2] += p.velocity.z;

      // Boundary wrap
      if (Math.abs(positions[i * 3]) > 60) p.velocity.x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 60) p.velocity.y *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 30) p.velocity.z *= -1;

      // Twinkle
      const twinkle = 0.6 + 0.4 * Math.sin(elapsed * 2 + p.phase);
      sizes.array[i] = p.baseSize * twinkle;
    }
    this.particleSystem.geometry.attributes.position.needsUpdate = true;
    sizes.needsUpdate = true;

    // Animate geometric shapes
    if (this.icoMesh) {
      this.icoMesh.rotation.x += 0.003;
      this.icoMesh.rotation.y += 0.005;
    }
    if (this.knotMesh) {
      this.knotMesh.rotation.x += 0.005;
      this.knotMesh.rotation.y += 0.008;
    }
    if (this.octMesh) {
      this.octMesh.rotation.x += 0.004;
      this.octMesh.rotation.z += 0.006;
    }

    // Gentle floating
    if (this.icoMesh) this.icoMesh.position.y = 4 + Math.sin(elapsed * 0.3) * 1.5;
    if (this.knotMesh) this.knotMesh.position.y = -5 + Math.sin(elapsed * 0.2 + 1) * 1.5;
    if (this.octMesh) this.octMesh.position.y = 8 + Math.sin(elapsed * 0.25 + 2) * 1.5;

    // Render
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    requestAnimationFrame(() => this.animate());
  }

  addEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (this.composer) {
        this.composer.setSize(window.innerWidth, window.innerHeight);
      }
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // Scroll parallax
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.camera.position.y = -(window.scrollY * 0.005);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

export function initThreeScene() {
  return new PremiumScene();
}

export default PremiumScene;
