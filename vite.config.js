import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages serves the repo at /federal-eu-project/
  // This ensures all asset and fetch paths resolve correctly.
  base: '/federal-eu-project/',
  root: '.',
  build: {
    rollupOptions: {
      input: {
        home:      resolve(__dirname, 'index.html'),
        theCase:   resolve(__dirname, 'the-case.html'),
        archive:   resolve(__dirname, 'archive.html'),
        dataRoom:  resolve(__dirname, 'data-room.html'),
        sources:   resolve(__dirname, 'sources.html'),
        colophon:  resolve(__dirname, 'colophon.html'),
      }
    }
  }
})
