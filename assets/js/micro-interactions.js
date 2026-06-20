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

// ─── Lightweight Cursor Glow ───
class CursorGlow {
  constructor() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    this.el = null;
    this._ticking = false;
    this.targetX = 0;
    this.targetY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.init();
  }

  init() {
    this.el = document.createElement('div');
    this.el.id = 'cursor-glow';
    document.body.appendChild(this.el);

    const style = document.createElement('style');
    style.textContent = `
      html, body, a, button, [role="button"], [tabindex] { cursor: none !important; }
      #cursor-glow {
        position: fixed; top: 0; left: 0;
        width: 8px; height: 8px;
        background: radial-gradient(circle, #00ced1, #8a2be2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 12px rgba(0,206,209,0.6), 0 0 24px rgba(138,43,226,0.3);
        transition: width 0.25s ease, height 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
        will-change: transform;
        mix-blend-mode: difference;
      }
      #cursor-glow.hovering {
        width: 16px; height: 16px;
        box-shadow: 0 0 20px rgba(138,43,226,0.8), 0 0 40px rgba(0,206,209,0.4);
        background: radial-gradient(circle, #ffd700, #8a2be2);
      }
      #cursor-glow.clicking {
        width: 4px; height: 4px;
        box-shadow: 0 0 30px rgba(255,215,0,0.9);
      }
      @media (pointer: coarse) { #cursor-glow { display: none !important; } }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
      if (!this._ticking) {
        this._ticking = true;
        requestAnimationFrame(() => {
          this.currentX += (this.targetX - this.currentX) * 0.3;
          this.currentY += (this.targetY - this.currentY) * 0.3;
          this.el.style.left = this.currentX + 'px';
          this.el.style.top = this.currentY + 'px';
          this._ticking = false;
        });
      }
    }, { passive: true });

    const interactors = 'a, button, [role="button"], input, textarea, select, .card, .card-3d, .magnetic-card, .stat-card, .nav-link, .hamburger-btn, .smartbot-fab';
    document.addEventListener('mouseover', (e) => { if (e.target.closest(interactors)) this.el?.classList.add('hovering'); }, { passive: true });
    document.addEventListener('mouseout', (e) => { if (e.target.closest(interactors)) this.el?.classList.remove('hovering'); }, { passive: true });
    document.addEventListener('mousedown', () => this.el?.classList.add('clicking'), { passive: true });
    document.addEventListener('mouseup', () => this.el?.classList.remove('clicking'), { passive: true });
    document.addEventListener('mouseleave', () => { if (this.el) this.el.style.opacity = '0'; }, { passive: true });
    document.addEventListener('mouseenter', () => { if (this.el) this.el.style.opacity = '1'; }, { passive: true });
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
