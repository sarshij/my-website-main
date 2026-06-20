import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) return 'three';
          if (id.includes('node_modules/gsap/')) return 'gsap';
          if (id.includes('node_modules/lenis/')) return 'vendor';
          if (id.includes('node_modules/@upstash/') || id.includes('node_modules/axios/')) return 'api-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
