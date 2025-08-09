import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',  // Add this line: your repo name as base path
  plugins: [react()],
  server: {
    open: 'chrome',
  }
})
