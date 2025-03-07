import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'ding-icons': path.resolve(__dirname, '../dist/index.esm.js')
    }
  },
  base: '/ding-icons/'
})