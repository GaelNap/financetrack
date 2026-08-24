import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative asset URLs, so one build works wherever it is served from:
  // Vercel and Netlify serve the app at the domain root, GitHub Pages
  // serves it under /financetrack/. An absolute base would hard-code one
  // of those and 404 every asset on the other.
  base: "./",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['ts-big-decimal']
  },
})
