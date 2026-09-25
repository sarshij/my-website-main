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

// ─── Colorful Native Cursor ───
// Uses a CSS custom cursor (SVG data-URI) — pure OS-level rendering.
// Zero JS animation loop, zero DOM elements, perfectly instant at all times.
class CursorGlow {
  constructor() {
    // Remove any leftover custom cursor elements from previous sessions
    ['cur-dot', 'cur-ring'].forEach(id => document.getElementById(id)?.remove());

    // Only apply on desktop pointer (not touch devices)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    this.init();
  }

  init() {
    // Vibrant yellow arrow cursor (SVG, standard arrow shape)
    // Hotspot at 4,2 = tip of the arrow
    const arrowSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
      <path d='M4 2 L4 22 L8 17 L11.5 25 L14.5 23.5 L11 16 L17 16 Z'
            fill='%23FFD700' stroke='%231a1a1a' stroke-width='1.2'
            stroke-linejoin='round' stroke-linecap='round'/>
    </svg>`;

    // Yellow pointer hand for hover states
    const handSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
      <path d='M10 2 C10 2 10 14 10 16 L6 16 C5 16 4 17 4 18 L4 20 C4 21 5 22 6 22
               L6 23 C6 24 7 25 8 25 L20 25 C21 25 22 24 22 23 L22 16
               C22 15 21.5 14 20.5 14 L14 14 L14 2 C14 1 13 0 12 0 C11 0 10 1 10 2 Z'
            fill='%23FFD700' stroke='%231a1a1a' stroke-width='1.2'
            stroke-linejoin='round'/>
    </svg>`;

    const arrowURL = `url("data:image/svg+xml,${arrowSVG}") 4 2, auto`;
    const handURL  = `url("data:image/svg+xml,${handSVG}") 10 2, pointer`;

    // Inject the cursor CSS — OS handles all rendering, no JS needed
    const style = document.createElement('style');
    style.id = 'colorful-cursor-style';
    style.textContent = `
      /* Vibrant yellow native cursor — pure CSS, zero JS overhead */
      html, body, * {
        cursor: ${arrowURL} !important;
      }
      /* Yellow pointer hand on interactive elements */
      a, button, [role="button"], input[type="submit"], input[type="button"],
      input[type="checkbox"], input[type="radio"], select, label[for],
      .nav-link, .card, .card-3d, .magnetic-btn, .cyber-download-btn,
      .smartbot-fab, .profile-link, .back-to-top, [data-cursor="pointer"] {
        cursor: ${handURL} !important;
      }
      /* Text fields: keep text cursor */
      input[type="text"], input[type="email"], input[type="search"],
      textarea, [contenteditable] {
        cursor: text !important;
      }
      /* Touch devices: let the OS handle cursors naturally */
      @media (pointer: coarse) {
        html, body, *, a, button { cursor: auto !important; }
      }
    `;
    document.head.appendChild(style);
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
