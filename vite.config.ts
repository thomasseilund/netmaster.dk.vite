import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './', // Makes all paths relative so it works anywhere on Apache
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Keeps your smart, automatic chunk/bundle splitting
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
