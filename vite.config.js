import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        verification: resolve(__dirname, 'verification.html'),
        verifying: resolve(__dirname, 'verifying.html'),
        error: resolve(__dirname, 'error.html'),
        flagged: resolve(__dirname, 'flagged.html'),
      },
    },
  },
})