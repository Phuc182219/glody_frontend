import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico']
  }
})