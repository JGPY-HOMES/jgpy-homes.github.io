import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'url';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      // 自定义插入位置
      inject: 'body-last',
      // 自定义DOM id
      customDomId: '__svg__icons__dom__',
    }),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: '河南交个朋友装饰有限公司',
        short_name: '交个朋友装饰',
        description: '专业室内外装饰设计与施工服务',
        theme_color: '#2F6B4F',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ],
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{html,js,css,svg,png,jpg,gif,woff,woff2,ttf,eot}'],
        navigateFallback: '/index.html',
        globIgnores: ['**/node_modules/**/*'],
        sourcemap: false,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      strategies: 'generateSW',
      srcDir: 'src',
      filename: 'sw.js',
      devOptions: {
        enabled: false,
        type: 'module',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  assetsInclude: ['**/*.svg'],
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
});
