/**
 * micro-interactions.js — Premium hover effects, magnetic buttons,
 * ripple effects, cursor glow v2, particle bursts, and interactive polish.
 */

// ─── Magnetic Buttons ───
class MagneticEffect {
  constructor() {
    this.buttons = document.querySelectorAll('.magnetic-btn, .cyber-download-btn, .submit-button, .profile-link, .nav-link');
    this.rafId = null;
    this.entries = [];
    this.init();
  }

  init() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    this.buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 8;
        this.entries.push({ el: btn, x: x / strength, y: y / strength });
        if (!this.rafId) {
          this.rafId = requestAnimationFrame(() => this.flush());
        }
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
      });
    });
  }

  flush() {
    this.entries.forEach(entry => {
      entry.el.style.transform = `translate(${entry.x}px, ${entry.y}px)`;
    });
    this.entries = [];
    this.rafId = null;
  }
}

// ─── Ripple Effect ───
class RippleEffect {
  constructor() {
    this.elements = document.querySelectorAll('.ripple-btn, .card, .card-3d, .magnetic-card, .nav-link');
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.style.position = 'relative';
      el.style.overflow = 'hidden';
      el.addEventListener('click', (e) => this.createRipple(e, el));
    });
  }

  createRipple(e, el) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 206, 209, 0.3), transparent);
      transform: scale(0);
      animation: ripple-anim 0.6s ease-out;
      pointer-events: none;
      z-index: 0;
    `;

    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

// ─── Premium Two-Layer Cursor ───
// dot   → near-instant follow (lerp 0.9) — feels physically attached to pointer
// ring  → smooth elegant trail (lerp 0.12) — subtle visual flair, no lag
class CursorGlow {
  constructor() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    // Raw mouse position (updated instantly on every mousemove)
    this.mx = 0;
    this.my = 0;

    // Dot — near-instant (lerp 0.9)
    this.dotX = 0;
    this.dotY = 0;

    // Ring — smooth trail (lerp 0.12)
    this.ringX = 0;
    this.ringY = 0;

    this._rafActive = false;
    this._isHovering = false;
    this._isClicking = false;

    this.init();
  }

  init() {
    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      /* Hide native cursor on all interactive elements */
      html, body, * { cursor: none !important; }

      /* ── Dot: tiny sharp centre ── */
      #cur-dot {
        position: fixed;
        top: 0; left: 0;
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #00ced1;
        pointer-events: none;
        z-index: 999999;
        will-change: transform;
        transform: translate3d(0,0,0) translate(-50%,-50%);
        transition: width .15s, height .15s, background .2s;
      }
      #cur-dot.clicking {
        width: 3px; height: 3px;
        background: #ffd700;
      }
      #cur-dot.hovering {
        width: 10px; height: 10px;
        background: #8a2be2;
      }

      /* ── Ring: smooth outer halo ── */
      #cur-ring {
        position: fixed;
        top: 0; left: 0;
        width: 32px; height: 32px;
        border-radius: 50%;
        border: 1.5px solid rgba(0,206,209,0.65);
        pointer-events: none;
        z-index: 999998;
        will-change: transform;
        transform: translate3d(0,0,0) translate(-50%,-50%);
        transition: width .25s cubic-bezier(.23,1,.32,1),
                    height .25s cubic-bezier(.23,1,.32,1),
                    border-color .25s,
                    opacity .3s;
      }
      #cur-ring.clicking {
        width: 20px; height: 20px;
        border-color: rgba(255,215,0,0.9);
        opacity: 0.7;
      }
      #cur-ring.hovering {
        width: 48px; height: 48px;
        border-color: rgba(138,43,226,0.8);
      }

      @media (pointer: coarse) {
        #cur-dot, #cur-ring { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    // Create elements
    this.dot  = document.createElement('div'); this.dot.id  = 'cur-dot';
    this.ring = document.createElement('div'); this.ring.id = 'cur-ring';
    document.body.append(this.dot, this.ring);

    // Track raw mouse — no DOM writes here, just record position
    document.addEventListener('mousemove', (e) => {
      this.mx = e.clientX;
      this.my = e.clientY;
      if (!this._rafActive) this._loop(); // restart loop if idle
    }, { passive: true });

    // Hover state
    const targets = 'a,button,[role="button"],input,textarea,select,.card,.card-3d,.magnetic-card,.stat-card,.nav-link,.hamburger-btn,.smartbot-fab';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(targets)) {
        this._isHovering = true;
        this.dot.classList.add('hovering');
        this.ring.classList.add('hovering');
      }
    }, { passive: true });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(targets)) {
        this._isHovering = false;
        this.dot.classList.remove('hovering');
        this.ring.classList.remove('hovering');
      }
    }, { passive: true });

    // Click state
    document.addEventListener('mousedown', () => {
      this._isClicking = true;
      this.dot.classList.add('clicking');
      this.ring.classList.add('clicking');
    }, { passive: true });
    document.addEventListener('mouseup', () => {
      this._isClicking = false;
      this.dot.classList.remove('clicking');
      this.ring.classList.remove('clicking');
    }, { passive: true });

    // Hide/show on window leave/enter
    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity  = '0';
      this.ring.style.opacity = '0';
    }, { passive: true });
    document.addEventListener('mouseenter', () => {
      this.dot.style.opacity  = '1';
      this.ring.style.opacity = '1';
    }, { passive: true });

    // Kick off animation loop once
    this._loop();
  }

  _loop() {
    this._rafActive = true;

    // Dot: nearly instant lerp (0.9) — feels physically attached
    this.dotX  += (this.mx - this.dotX)  * 0.9;
    this.dotY  += (this.my - this.dotY)  * 0.9;

    // Ring: slow smooth trail lerp (0.12) — elegant follow
    this.ringX += (this.mx - this.ringX) * 0.12;
    this.ringY += (this.my - this.ringY) * 0.12;

    // Write directly to transform — GPU composited, zero layout/paint
    this.dot.style.transform  = `translate3d(${this.dotX.toFixed(1)}px,${this.dotY.toFixed(1)}px,0) translate(-50%,-50%)`;
    this.ring.style.transform = `translate3d(${this.ringX.toFixed(1)}px,${this.ringY.toFixed(1)}px,0) translate(-50%,-50%)`;

    // Stop the loop only when both elements have fully settled to avoid wasted frames
    const dotDist  = Math.abs(this.mx - this.dotX)  + Math.abs(this.my - this.dotY);
    const ringDist = Math.abs(this.mx - this.ringX) + Math.abs(this.my - this.ringY);
    if (dotDist > 0.1 || ringDist > 0.5) {
      requestAnimationFrame(() => this._loop());
    } else {
      this._rafActive = false; // fully settled — no more GPU work until next move
    }
  }
}

// ─── Skill Bars Animation ───
class SkillBars {
  constructor() {
    this.bars = document.querySelectorAll('.skill-bar-fill');
    this.init();
  }

  init() {
    if (!this.bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.dataset.width || '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    this.bars.forEach(bar => observer.observe(bar));
  }
}

// ─── Animated Counters ───
class AnimatedCounters {
  constructor() {
    this.counters = document.querySelectorAll('.counter-value');
    this.init();
  }

  init() {
    if (!this.counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target) || 0;
          const suffix = counter.dataset.suffix || '';
          const duration = parseInt(counter.dataset.duration) || 2000;
          this.animateCounter(counter, target, suffix, duration);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(c => observer.observe(c));
  }

  animateCounter(el, target, suffix, duration) {
    const start = performance.now();
    const decimals = parseInt(el.dataset.decimals) || 0;
    const divider = parseInt(el.dataset.divider) || 1;
    const displayTarget = target / divider;

    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (eased * target) / divider;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = displayTarget.toFixed(decimals) + suffix;
      }
    };
    requestAnimationFrame(frame);
  }
}

// ─── Parallax on Mouse ───
class MouseParallax {
  constructor() {
    this.layers = document.querySelectorAll('[data-parallax]');
    if (!this.layers.length) return;
    this.rafId = null;
    this.mx = 0;
    this.my = 0;
    this.init();
  }

  init() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.addEventListener('mousemove', (e) => {
      this.mx = (e.clientX / window.innerWidth - 0.5) * 2;
      this.my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!this.rafId) {
        this.rafId = requestAnimationFrame(() => this.flush());
      }
    }, { passive: true });
  }

  flush() {
    this.layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.parallax) || 0.05;
      layer.style.transform = `translate(${this.mx * speed * 30}px, ${this.my * speed * 30}px)`;
    });
    this.rafId = null;
  }
}

// ─── Card Glow Effect ───
class CardGlow {
  constructor() {
    this.cards = document.querySelectorAll('.card-glow, .card-3d, .glass-panel, .magnetic-card');
    if (!this.cards.length) return;
    this.rafId = null;
    this.pending = [];
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        this.pending.push({ card, e });
        if (!this.rafId) {
          this.rafId = requestAnimationFrame(() => this.flush());
        }
      });
    });
  }

  flush() {
    this.pending.forEach(({ card, e }) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--glow-x', x + '%');
      card.style.setProperty('--glow-y', y + '%');
    });
    this.pending = [];
    this.rafId = null;
  }
}

// ─── Initialize Everything ───
document.addEventListener('DOMContentLoaded', () => {
  new MagneticEffect();
  new RippleEffect();
  new CursorGlow();
  new SkillBars();
  new AnimatedCounters();
  new MouseParallax();
  new CardGlow();
});

export {
  MagneticEffect,
  RippleEffect,
  CursorGlow,
  SkillBars,
  AnimatedCounters,
  MouseParallax,
  CardGlow,
};
