import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    // Target modern browsers only — saves ~11 KiB of legacy polyfills.
    // Safe: this site already uses CSS features (backdrop-filter, etc.)
    // that only work in modern browsers anyway.
    target: 'esnext',
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      },
      output: {
        manualChunks(id) {
          // Split heavy libraries into separate async chunks
          // so the main JS bundle stays lean for fast FCP/LCP
          if (id.includes('node_modules/three/')) return 'three';
          if (id.includes('node_modules/gsap/')) return 'gsap';
          // lenis removed
          if (id.includes('node_modules/@upstash/') || id.includes('node_modules/axios/')) return 'api-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});

