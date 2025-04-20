// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ↓リポジトリ名に合わせて書き換える（例：remysite）
const repoName = 'remysite'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
