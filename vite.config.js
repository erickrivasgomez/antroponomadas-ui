// @ts-check
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    open: true,
    fs: {
      strict: false,
      allow: ['..'],
    },
    // Handle SPA fallback for client-side routing
    proxy: {
      // If you have API endpoints, configure them here
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          pdf: ['react-pdf', 'pdfjs-dist'],
        },
      },
    },
  },
});
