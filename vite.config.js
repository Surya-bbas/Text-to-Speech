import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Text-to-Speech/',
  plugins: [react()],
  mode: "development",
  build: {
    minify: false,
  }
})
