export default defineNuxtConfig({
  // ===== Core =====
  devtools: { enabled: true },
  compatibilityDate: '2025-08-17',

  // ===== TypeScript =====
  typescript: {
    strict: true,
    typeCheck: true
  },

  // ===== CSS =====
  css: ['~/assets/css/main.css'],

  // ===== Modules =====
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],

  // ===== PWA Configuration =====
  pwa: {
    disable: process.env.NODE_ENV === 'development',
   
    registerType: 'autoUpdate',
    workbox: {
      // Use more specific glob patterns to avoid the _payload.json warning
      globPatterns: [
        '**/*.{js,css,html,png,svg,ico,webp,jpg,woff,woff2,eot,ttf,otf}'
      ],
      globIgnores: [
        '**/node_modules/**/*',
        'sw.js',
        'workbox-*.js',
        '**/_payload.json' // Explicitly ignore this pattern
      ],
      navigateFallback: '/offline.html',
      // Improve caching strategy for Ghana users
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
            }
          }
        }
      ]
    },
    // Remove client config that might be causing issues
    manifest: {
      name: 'Benjamin Appiah-Poku - Portfolio',
      short_name: 'Ben Portfolio',
      description: 'Mobile-first portfolio optimized for Ghana',
      theme_color: '#1F3A8A',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  // ===== [New Feature] START =====
  // Add middleware to handle Chrome DevTools requests
  // This prevents ECONNRESET errors in development
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      ignore: ['/api', '/_nuxt']
    },
    routeRules: {
      '/.well-known/**': { headers: { 'Cache-Control': 'public, max-age=86400' } },
      // Fix for content API routes
      '/api/_content/**': { headers: { 'Cache-Control': 'public, max-age=300' } }
    }
  },
  // ===== [New Feature] END =====

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    viewer: true
  },

  image: {
    quality: 60,
    format: ['webp', 'jpg'],
    screens: { xs: 320, sm: 640, md: 768, lg: 1024 }
  },

  app: {
    head: {
      title: 'Benjamin Appiah-Poku - Ghana Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mobile-first portfolio optimized for Ghana' },
        { name: 'theme-color', content: '#1F3A8A' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' } // optional fallback
      ]
    }
  },

  build: {
    transpile: ['localforage', '@fortawesome/vue-fontawesome'],
    // Optimize for production builds
    analyze: false
  },

  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      apiBase: process.env.API_BASE || '/api',
      enableOfflineMode: true,
      appName: 'Benjamin Appiah-Poku'
    }
  },

  ssr: true,

  routeRules: {
    // Disable prerendering temporarily to identify SSR issues
    // '/': { prerender: true },
    // '/about': { prerender: true },
    '/api/**': { cors: true, headers: { 'Cache-Control': 's-maxage=300' } }
  }
})