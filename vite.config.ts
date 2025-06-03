import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/guide-trae/', // 替换为你的仓库名
  build: {
    outDir: 'dist'
  }
})
