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

// AI Chatbot (replaces Athena companion)
import './assets/js/smartbot.js';

// Loading Screen
import './assets/js/loading-screen.js';

// Project Lightbox
import './assets/js/project-lightbox.js';

// 3D Enhanced Background — dynamically imported after page paint to reduce TBT
window.addEventListener('load', () => {
  // Small delay to ensure main thread is free
  setTimeout(() => {
    import('./assets/js/three-enhanced.js').then(mod => {
      mod.initThreeScene();
    }).catch(() => {
      // Graceful fallback if Three.js fails to load
      console.warn('3D scene unavailable');
    });
  }, 100);
});
