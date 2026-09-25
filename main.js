// CSS Imports for Vite bundling
import './assets/css/style.css';
import './assets/css/glassmorphism.css';
import './assets/css/project-icons.css';
import './assets/css/luxury-effects.css';
import './assets/css/loading-screen.css';
import './assets/css/smartbot.css';

// Core Site Interactions (critical — loaded immediately)
import './assets/js/script.js';

// Premium Micro-interactions
import './assets/js/micro-interactions.js';

// AI Chatbot (Athena) — loaded immediately so it's always available
import './assets/js/smartbot.js';

// Loading Screen
import './assets/js/loading-screen.js';

// Project Lightbox
import './assets/js/project-lightbox.js';

// 3D Background: only on desktop (pointer:fine) to protect mobile PageSpeed score.
// Three.js is ~500KB of JS that blocks the main thread on phones.
// Mobile users get the dark canvas background (looks fine, no visible loss).
const isDesktop = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;

if (isDesktop) {
  window.addEventListener('load', () => {
    // Small delay to ensure main thread is free after first paint
    setTimeout(() => {
      import('./assets/js/three-enhanced.js').then(mod => {
        mod.initThreeScene();
      }).catch(() => {
        // Graceful fallback if Three.js fails to load
        console.warn('3D scene unavailable');
      });
    }, 200);
  });
}

