import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 🔥 Tambahkan ini:
    host: true, // agar bisa diakses dari HP di jaringan yang sama
    port: 5173  // port default Vite
  }
})
