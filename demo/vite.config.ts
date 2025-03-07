import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias configuration
      'ding-icons': path.resolve(__dirname, '../dist/ding-icons.es.js')
    }
  },
  base: '/ding-icons/'
})