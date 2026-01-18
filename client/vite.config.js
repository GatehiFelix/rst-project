import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@data': '/src/data',
      '@screens': '/src/screens',
      '@slices': '/src/slices',
      '@utils': '/src/utils',
    }
  }
});
