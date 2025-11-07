import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

function copyFolderSync(from: string, to: string) {
  fs.mkdirSync(to, { recursive: true })
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name)
    const destPath = path.join(to, entry.name)
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'copy-assets-folder',
      closeBundle() {
        const srcDir = resolve(__dirname, 'public/assets')
        const destDir = resolve(__dirname, 'public/assets')
        if (fs.existsSync(srcDir)) {
          copyFolderSync(srcDir, destDir)
          console.log('Copiata la cartella assets in dist/')
        }
      },
    },
  ]
})