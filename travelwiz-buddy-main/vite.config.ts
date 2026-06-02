import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { netlifyFunctionsAdapter } from '@tanstack/start-netlify-functions/adapter'

export default defineConfig({
  plugins: [react()],
  // Ez mondja meg a TanStack Startnak, hogy Netlify-ra építsen szerverfunkciókat:
  start: {
    adapter: netlifyFunctionsAdapter()
  }
})
