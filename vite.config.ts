import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: '河南交个朋友装饰有限公司',
        short_name: '交个朋友装饰',
        description: '专业室内外装饰设计与施工服务',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{html,js,css,svg,png,jpg,gif,woff,woff2,ttf,eot}'],
        navigateFallback: '/index.html',
        // 添加以下配置
        globIgnores: ['**/node_modules/**/*'],
        sourcemap: false,
      },
      // 明确指定入口文件
      includeManifestIcons: true,
      strategies: 'generateSW',
      srcDir: 'src', // 如果你的入口文件在src目录下
      filename: 'service-worker.js',
      devOptions: {
        enabled: true,
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
  // 确保base配置正确
  base: '/',
});
