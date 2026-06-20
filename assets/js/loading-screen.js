/**
 * loading-screen.js — Premium animated loading screen
 * Features: animated logo, progress ring, particle burst, status text
 */

class LoadingScreen {
  constructor() {
    window.scrollTo(0, 0);
    this.minDuration = 2500;
    this.startTime = performance.now();
    this.injectHTML();
    this.cacheElements();
    this.animate();
  }

  injectHTML() {
    const div = document.createElement('div');
    div.innerHTML = `
      <div id="loadingScreen" class="loading-screen">
        <div class="loading-content">
          <div class="loading-logo">
            <svg class="loading-hex" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#8a2be2"/>
                  <stop offset="100%" stop-color="#00ced1"/>
                </linearGradient>
              </defs>
              <polygon class="hex-shape" points="50 5 90 27.5 90 72.5 50 95 10 72.5 10 27.5"
                fill="none" stroke="url(#hex-grad)" stroke-width="2"/>
              <polygon class="hex-inner" points="50 15 80 32 80 68 50 85 20 68 20 32"
                fill="none" stroke="url(#hex-grad)" stroke-width="1" opacity="0.4"/>
              <circle class="hex-core" cx="50" cy="50" r="8" fill="#00ced1" opacity="0.8">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div class="loading-progress-ring">
            <svg viewBox="0 0 120 120">
              <circle class="ring-bg" cx="60" cy="60" r="52"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
              <circle class="ring-progress" cx="60" cy="60" r="52"
                fill="none" stroke="url(#hex-grad)" stroke-width="2"
                stroke-linecap="round" stroke-dasharray="326.7"
                stroke-dashoffset="326.7" transform="rotate(-90 60 60)"/>
              <circle class="ring-glow" cx="60" cy="60" r="52"
                fill="none" stroke="#00ced1" stroke-width="4"
                stroke-linecap="round" stroke-dasharray="326.7"
                stroke-dashoffset="326.7" transform="rotate(-90 60 60)"
                opacity="0.3" filter="url(#glow)"/>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
            </svg>
            <div class="loading-percent" id="loadingPercent">0%</div>
          </div>
          <div class="loading-status" id="loadingStatus">INITIALIZING NEURAL LINK...</div>
          <div class="loading-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
    document.body.insertBefore(div.firstElementChild, document.body.firstChild);
  }

  cacheElements() {
    this.screen = document.getElementById('loadingScreen');
    this.percent = document.getElementById('loadingPercent');
    this.status = document.getElementById('loadingStatus');
    this.progressRing = this.screen?.querySelector('.ring-progress');
    this.hexShape = this.screen?.querySelector('.hex-shape');

    this.statusMessages = [
      { pct: 0, msg: 'INITIALIZING NEURAL LINK...' },
      { pct: 15, msg: 'CALIBRATING QUANTUM CORES...' },
      { pct: 30, msg: 'ESTABLISHING SECURE UPLINK...' },
      { pct: 45, msg: 'LOADING INTERFACE SYSTEMS...' },
      { pct: 60, msg: 'SYNCHRONIZING DATA STREAMS...' },
      { pct: 75, msg: 'OPTIMIZING RENDER PIPELINE...' },
      { pct: 90, msg: 'FINALIZING CONNECTION...' },
      { pct: 100, msg: 'SYSTEM READY' },
    ];
  }

  animate() {
    const circumference = 326.7;
    let progress = 0;
    const speed = 100 / (this.minDuration / 16);

    const frame = () => {
      progress = Math.min(progress + speed, 100);
      const offset = circumference - (progress / 100) * circumference;

      if (this.progressRing) {
        this.progressRing.style.strokeDashoffset = offset;
      }
      if (this.percent) {
        this.percent.textContent = Math.round(progress) + '%';
      }
      if (this.status) {
        const msg = this.statusMessages.find(m => progress >= m.pct);
        if (msg && this.status.textContent !== msg.msg) {
          this.status.textContent = msg.msg;
        }
      }
      if (this.hexShape) {
        this.hexShape.style.transform = `rotate(${progress * 3.6}deg)`;
      }

      if (progress < 100) {
        requestAnimationFrame(frame);
      } else {
        this.complete();
      }
    };
    requestAnimationFrame(frame);
  }

  complete() {
    const elapsed = performance.now() - this.startTime;
    const remaining = Math.max(0, this.minDuration - elapsed);

    setTimeout(() => {
      this.screen?.classList.add('loading-complete');
      setTimeout(() => {
        this.screen?.remove();
        window.scrollTo(0, 0);
        document.body.classList.add('content-ready');
      }, 800);
    }, remaining);
  }
}

// Auto-initialize
(function () {
  // Prevent browser from restoring scroll position after reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  // Wait for critical resources
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new LoadingScreen());
  } else {
    new LoadingScreen();
  }
})();

export default LoadingScreen;
