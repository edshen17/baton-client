import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: path.resolve(__dirname, '../server/dist/server/public')
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ['vue'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    Unocss(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    Inspect(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
