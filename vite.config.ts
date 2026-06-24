import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline', // <-- Added this to auto-inject registration into index.html
      // 1. Tells the plugin which static files in your 'public' folder to include
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'images/**/*'], 
      manifest: {
        name: 'Personal PWA',
        short_name: 'PersonalPWA',
        description: 'My custom mobile-first progressive web app',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      // 2. Configure Workbox behavior for build assets
      workbox: {
        // Cache everything Vite generates in the dist folder, including src/assets/ images
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        maximumFileSizeToCacheInBytes: 5000000
      }
    })
  ],
  base: '/personal-pwa/'
})