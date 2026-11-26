/**
 * skeleton-loader.js — Layout-matched skeleton loading controller
 *
 * Handles:
 * 1. Dismissing the initial first-paint page skeleton (#siteSkeleton) once
 *    critical UI assets are ready (with guaranteed fail-safe timeout).
 * 2. Reliable .skeleton image loading / error fallback (no invisible images).
 * 3. Cloudflare Turnstile async widget skeleton placeholder.
 * 4. Reusable SkeletonUI helper for any dynamic fetch() UI containers.
 */

const MAX_INITIAL_SKELETON_MS = 2200;
const MIN_SMOOTH_MS = 120;

class SkeletonManager {
  constructor() {
    this.startTime = performance.now();
    this.dismissed = false;
    this.init();
  }

  init() {
    this.initImageSkeletons();
    this.initTurnstileSkeleton();
    this.scheduleInitialDismiss();
  }

  /**
   * Wait for DOM + stylesheets + hero image (or short timeout) before revealing UI.
   */
  scheduleInitialDismiss() {
    const pageSkeleton = document.getElementById('siteSkeleton');
    if (!pageSkeleton) return;

    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.setAttribute('aria-busy', 'true');

    const dismiss = () => {
      if (this.dismissed) return;
      this.dismissed = true;

      const elapsed = performance.now() - this.startTime;
      const delay = Math.max(0, MIN_SMOOTH_MS - elapsed);

      setTimeout(() => {
        pageSkeleton.classList.add('is-hiding');
        document.body.classList.add('content-ready');
        if (mainEl) mainEl.setAttribute('aria-busy', 'false');

        setTimeout(() => {
          pageSkeleton.remove();
        }, 400);
      }, delay);
    };

    // Wait for DOM ready + hero image paint or max timeout
    const onReady = () => {
      const heroImg = document.querySelector('.hero-image-right img');
      const heroReady =
        !heroImg ||
        (heroImg.complete && heroImg.naturalWidth > 0);

      if (heroReady) {
        requestAnimationFrame(dismiss);
        return;
      }

      let settled = false;
      const finishOnce = () => {
        if (settled) return;
        settled = true;
        requestAnimationFrame(dismiss);
      };

      heroImg.addEventListener('load', finishOnce, { once: true });
      heroImg.addEventListener('error', finishOnce, { once: true });
      // Never block initial reveal longer than 900ms waiting on hero photo alone
      setTimeout(finishOnce, 900);
    };

    if (document.readyState === 'complete') {
      onReady();
    } else if (document.readyState === 'interactive') {
      onReady();
    } else {
      document.addEventListener('DOMContentLoaded', onReady, { once: true });
    }

    window.addEventListener('load', () => {
      requestAnimationFrame(dismiss);
    }, { once: true });

    // Hard failsafe — never leave skeleton blocking the screen
    setTimeout(dismiss, MAX_INITIAL_SKELETON_MS);
  }

  /**
   * Ensures every .skeleton image wrapper transitions cleanly on load or error.
   */
  initImageSkeletons() {
    const containers = document.querySelectorAll('.skeleton');
    containers.forEach((container) => {
      const img = container.querySelector('img');
      if (!img) {
        container.classList.add('loaded');
        return;
      }

      const markLoaded = () => {
        container.classList.add('loaded');
        img.classList.add('loaded');
      };

      const markError = () => {
        container.classList.add('skeleton-error');
        img.classList.add('loaded');
      };

      if (img.complete) {
        if (img.naturalWidth > 0) {
          markLoaded();
        } else {
          markError();
        }
        return;
      }

      img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', markError, { once: true });
    });
  }

  /**
   * Keeps a bone placeholder visible until Cloudflare Turnstile mounts its iframe.
   */
  initTurnstileSkeleton() {
    const wrap = document.querySelector('.turnstile-skeleton-wrap');
    const widget = wrap?.querySelector('.cf-turnstile');
    if (!wrap || !widget) return;

    const markReady = () => wrap.classList.add('is-ready');

    if (widget.querySelector('iframe')) {
      markReady();
      return;
    }

    const observer = new MutationObserver(() => {
      if (widget.querySelector('iframe') || widget.childElementCount > 0) {
        markReady();
        observer.disconnect();
      }
    });
    observer.observe(widget, { childList: true, subtree: true });

    // Failsafe if Turnstile is blocked or offline
    setTimeout(() => {
      markReady();
      observer.disconnect();
    }, 6000);
  }
}

/**
 * Reusable SkeletonUI API for any async data fetching on the site.
 * Mirrors Boneyard's <Skeleton loading={...}> pattern in vanilla JS.
 */
const SkeletonUI = {
  templates: {
    cards(count = 2) {
      return `
        <div class="sk-fetch-overlay sk-fetch-grid-2" aria-hidden="true">
          ${Array.from({ length: count })
            .map(
              () => `
            <div class="sk-card">
              <div class="sk-bone" style="height: 140px; width: 100%;"></div>
              <div class="sk-bone sk-line-lg" style="width: 72%;"></div>
              <div class="sk-bone sk-line" style="width: 100%;"></div>
              <div class="sk-bone sk-line" style="width: 84%;"></div>
              <div class="sk-bone sk-pill" style="height: 32px; width: 110px; margin-top: 0.5rem;"></div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    },
    text(lines = 3) {
      const widths = ['92%', '100%', '78%', '86%', '65%'];
      return `
        <div class="sk-fetch-overlay" aria-hidden="true">
          ${Array.from({ length: lines })
            .map(
              (_, i) =>
                `<div class="sk-bone sk-line" style="width: ${widths[i % widths.length]};"></div>`
            )
            .join('')}
        </div>
      `;
    },
    profile() {
      return `
        <div class="sk-card" aria-hidden="true">
          <div style="display:flex;align-items:center;gap:1rem;">
            <div class="sk-bone sk-circle" style="width:56px;height:56px;flex-shrink:0;"></div>
            <div style="flex:1;display:flex;flex-direction:column;gap:0.5rem;">
              <div class="sk-bone sk-line" style="width:55%;"></div>
              <div class="sk-bone sk-line" style="width:35%;"></div>
            </div>
          </div>
          <div class="sk-bone sk-line" style="width:100%;"></div>
          <div class="sk-bone sk-line" style="width:82%;"></div>
        </div>
      `;
    },
  },

  /**
   * Replace container content temporarily with a skeleton while preserving original HTML.
   */
  show(container, { template = 'text', count = 3 } = {}) {
    if (!container) return;
    if (!container.dataset.skOriginalHtml) {
      container.dataset.skOriginalHtml = container.innerHTML;
    }
    container.setAttribute('aria-busy', 'true');
    const builder = this.templates[template] || this.templates.text;
    container.innerHTML = builder(count);
  },

  /**
   * Restore original HTML or inject freshly fetched HTML.
   */
  hide(container, newHtml = null) {
    if (!container) return;
    if (typeof newHtml === 'string') {
      container.innerHTML = newHtml;
    } else if (container.dataset.skOriginalHtml !== undefined) {
      container.innerHTML = container.dataset.skOriginalHtml;
    }
    delete container.dataset.skOriginalHtml;
    container.setAttribute('aria-busy', 'false');
  },

  /**
   * Run an async fetch/task while automatically showing and clearing the skeleton.
   */
  async wrap(container, asyncFn, options = {}) {
    this.show(container, options);
    try {
      const result = await asyncFn();
      this.hide(container, typeof result === 'string' ? result : null);
      return result;
    } catch (err) {
      this.hide(container);
      throw err;
    }
  },
};

window.SkeletonUI = SkeletonUI;
const skeletonManager = new SkeletonManager();

export { SkeletonUI, SkeletonManager, skeletonManager };
export default skeletonManager;
