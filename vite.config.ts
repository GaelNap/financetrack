import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/financetrack/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['ts-big-decimal']
  },
})
