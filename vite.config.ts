import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Permite que Vite escuche en 0.0.0.0 (no solo en localhost)
    allowedHosts: true, // Permite cualquier dominio/túnel de Cloudflare
  }
})