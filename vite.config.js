import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deploying to Vercel/Netlify from the repo root, so the default base ('/') is fine.
  // If you ever host this as a GitHub Pages *project* site (username.github.io/portfolio/),
  // set: base: '/portfolio/'
})
