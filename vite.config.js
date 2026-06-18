import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild', // For better minification if desired, or 'esbuild'
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      }
    }
  }
});
