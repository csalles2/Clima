import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Clima/', // Barra no início e no final é essencial
  build: {
    outDir: 'dist',
    emptyOutDir: true // Limpa a pasta dist antes de cada build
  }
})