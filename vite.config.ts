// tps most of this file comes from https://rizkicitra.dev/blog/improving-performance-in-react to enable code splitting
// before code splitting one bundle of 750 kB. Not 14 bundles, all less than 330 kB

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dependencies } from './package.json'
 
const exclVendors = ['react', 'react-router-dom', 'react-dom']
function renderChunks(deps: Record<string, string>) {
  let chunks = {}
  Object.keys(deps).forEach((key) => {
    if (exclVendors.includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [
    react(),
  ],
  base: '/netmaster.dk.vite/',    // subfolder that app runs in on server
})