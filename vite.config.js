import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { setupBuild } from './build/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: setupBuild(),
  // eslint-disable-next-line no-undef
  // base: process.env.NODE_ENV === 'production' ? '/iga_web_v2/' : '/'
})
