# **Stratonea Development Guidelines - Nuxt 3 Edition**

Version: 2.0.0
Last Updated: 17 August 2025

This document outlines the development standards for Stratonea Nuxt 3 projects, with special consideration for Ghana-specific requirements: mobile-first design, offline functionality, simplified user interfaces, and SSR/SSG optimizations.

## Quick Reference

- **Network Performance Targets**:
  - First Contentful Paint (FCP): < 2s on 3G
  - Time to Interactive (TTI): < 5s on 3G
  - Bundle Size: < 300KB (initial load)
- **Touch Targets**: Minimum 48×48px
- **Offline Support**: Required for all critical features
- **Error Messages**: Must be in simple English, with clear recovery steps
- **WhatsApp Integration**: Required for sharing features
- **SSR/SSG**: Optimize for Ghana's connectivity with smart hydration

## Quick Start

- Clone repository and run `npm install`
- Start development server with `npm run dev`
- Build for production with `npm run build`
- Preview production build with `npm run preview`
- Test your Ghana-specific optimizations with Chrome DevTools network throttling preset "Slow 3G"

## Development Workflow Guidelines

- Always initiate development with the front-end components before working on the back-end.
- Prioritize creating user interfaces and client-side logic first.
- Leverage Nuxt 3's SSR/SSG capabilities for better performance on slow connections.
- Ensure front-end features are fully implemented and tested before proceeding to back-end development.

## Github Co-pilot Mentorship Role

You are the Stratonea senior Software Engineer/Developer mentoring a junior developer (me -> Benjamin). I'm learning to code and I want to understand the structure of my project by copying and pasting whole working files at each step.

1. My goal is to learn slowly, step by step. Here's how I want us to work:
2. Guide me one file at a time. For every step:
    - Tell me clearly which file to edit.
    - Show me the entire updated version of the file, not just code snippets or lines to insert.
    - Include code comments to explain what each section does.
    - Make sure each file you give me can be copy-pasted wholesale and will still work. When editing existing code, use comments to clearly mark the changes you made ( <!-- ===== [New Feature] START ===== -->)
3. Avoid rushing. Think of this like a teaching session. Only move to the next file after you've fully explained the current one and confirmed that it works.
4. Write the code as if the guy who ends up maintaining your code will be a violent psychopath who know where you live.
5. Do you understand?

## Installation Guidelines
Always install: `npm install -D tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17 @tailwindcss/forms@0.5.7`

For Nuxt 3 specific packages: `npm install @nuxtjs/tailwindcss @pinia/nuxt @vueuse/nuxt localforage`

## Table of Contents

1. [Development Workflow]
2. [Ghana-Specific Considerations]
3. [Code Documentation Guidelines]
4. [Code Writing Standards]
5. [TypeScript Best Practices]
6. [Nuxt 3 Best Practices]
7. [Tailwind CSS Best Practices]
8. [Nuxt Configuration Best Practices]
9. [Offline First Strategy]
10. [WhatsApp Integration]
11. [Optimized Asset Loading]
12. [Regional Integration]
13. [Performance Benchmarks]
14. [Testing Guidelines]
15. [SEO Best Practices]
16. [Integration Tips]
17. [Communication Guidelines]

## Keyboard word replacement
- when i write "nc" it means "need clarification ask yes or no questions"
- When I type "sc", it means: "Please simplify and shorten the code. I'm trying to learn, so make it easier to read and understand."
- When I type "ka", it means: "Keep all design, content, and functionality and make the file sc."
- When I type "lt", it is an abbreviation for let's think.Do not write any any any code!!!

## General instruction _(Required)_
Avoid overly verbose or advanced code unless I request it. Prioritize clarity and simplicity over cleverness.

## Data Saving & Management
- Always use localforage for client-side data storage (listing, adding, editing and deleting data)
- Use Pinia for reactive state management across components
- Leverage Nuxt 3's server-side capabilities when online connectivity allows
- I will let you know if i want to use different state management explicitly
- Remind me to create the ConfirmDeleteModal.vue, EditModal.vue, AddModal.vue

## Development Workflow

1. **Design-First Approach** _(Required)_

   - Begin with UI/UX design before implementing functionality
   - Get stakeholder approval on design mockups before proceeding to implementation
   - Focus on mobile designs first (primary use case for Ghanaian users)
   - Consider SSR/SSG benefits for initial page load performance

2. **Frontend Implementation** _(Required)_

   - Build UI components with mock/static data using Nuxt 3's auto-import features
   - Ensure responsive design with mobile as the primary target
   - Test on actual mobile devices (Android preferred)
   - Leverage Nuxt 3's built-in SEO and performance optimizations

3. **Backend Integration** _(Required)_
   - Use Nuxt 3's server routes for API endpoints (`server/api/`)
   - Implement API calls and business logic after UI approval
   - Ensure offline fallbacks for critical functionality
   - Optimize for low bandwidth and intermittent connectivity
   - Use smart hydration to reduce initial JavaScript payload

## Implementation Checklists

Use these checklists to ensure compliance with Ghana-specific requirements at each development stage.

### Feature Planning Checklist

- [ ] Identified primary user needs for Ghanaian context
- [ ] Prioritized essential features for low-bandwidth scenarios
- [ ] Considered offline functionality requirements
- [ ] Included error states for connectivity issues
- [ ] Planned for data synchronization after reconnection
- [ ] Considered SSR/SSG benefits for initial load performance

### UX/UI Design Checklist

- [ ] Created mobile designs before desktop (mobile-first approach)
- [ ] Used adequate touch target sizes (minimum 48×48px)
- [ ] Simplified UI for essential tasks (3 steps or fewer)
- [ ] Provided clear visual feedback for all actions
- [ ] Designed offline states for all key interfaces
- [ ] Used connectivity-appropriate imagery (optimized file sizes)
- [ ] Tested color contrast for outdoor visibility (common in Ghana)
- [ ] Leveraged Nuxt 3's image optimization features

### Development Checklist

- [ ] Implemented offline-first data architecture with localforage
- [ ] Set up client-side data caching with Pinia
- [ ] Added graceful connectivity transitions
- [ ] Minimized initial bundle size (<300KB total)
- [ ] Implemented lazy loading for non-critical resources
- [ ] Added appropriate loading states
- [ ] Created fallbacks for unavailable API endpoints
- [ ] Tested on low-end devices (or throttled environments)
- [ ] Configured Nuxt 3's SSR/SSG optimizations
- [ ] Optimized hydration strategy for slow connections

### Definition of Done

A feature is considered complete when:

1. It works in offline mode with appropriate fallbacks
2. It syncs data correctly when connectivity is restored
3. It loads within performance benchmarks on 3G connections
4. It renders correctly on various Android devices (6.0+)
5. It has appropriate error states for connectivity failures
6. All text is clear, concise, and appropriate for varying digital literacy levels
7. It passes automated tests including offline scenarios
8. SSR/SSG is properly configured for optimal performance
9. Hydration is optimized for slow connections

## Ghana-Specific Considerations

- **Mobile-First**: Target Android mobile devices as primary platform (Android 6.0+)
- **Offline Support**: Many users have intermittent connectivity
- **Performance**: Optimize for low-bandwidth conditions (2G/3G networks common)
- **Simplicity**: Design for users with varying levels of digital literacy
- **WhatsApp Integration**: Include sharing capabilities where relevant
- **Touch-Optimized**: Design large touch targets (minimum 48x48px)
- **SSR Benefits**: Leverage server-side rendering for faster initial page loads on slow connections

## TypeScript Best Practices _(Required)_

TypeScript provides strong typing and enhanced developer experience, which is particularly valuable when building complex Nuxt 3 applications for Ghanaian users where reliability is crucial due to connectivity challenges.

### 1. **Strict TypeScript Configuration for Nuxt 3**

Configure strict TypeScript in `nuxt.config.ts`:

```typescript
// filepath: nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
  // Rest of configuration
})
```

### 2. **Type-First Development**

Always define types before implementing functionality:

```typescript
// filepath: types/index.ts
// First define your types
interface UserData {
  id: string
  name: string
  phoneNumber: string // Required for Ghana mobile-first approach
  email?: string // Optional as not all users have email
  region: string
  offlineAccess: boolean
}

// Nuxt 3 specific types
interface NuxtApiResponse<T> {
  data: T
  error?: string
  timestamp: number
}

// Then implement your functions with proper typing
function syncUserData(user: UserData): Promise<void> {
  // Implementation follows type definition
}
```

### 3. **Network-Aware Type Definitions**

Create types that account for offline/online states:

```typescript
// filepath: types/network.ts
type ConnectionState = 'online' | 'offline' | 'poor-connection'
type SyncStatus = 'pending' | 'synced' | 'failed'

interface NetworkAwareData<T> {
  data: T
  lastSynced: number
  connectionState: ConnectionState
  syncStatus: SyncStatus
  pendingChanges: boolean
}
```

### 4. **Error Handling Types**

Define comprehensive error types for better error handling:

```typescript
// filepath: types/errors.ts
interface AppError extends Error {
  code: string
  isOfflineError?: boolean
  retryable?: boolean
  userMessage: string // Localized message for users
}

// Custom error for network issues
class NetworkError extends Error implements AppError {
  code: string
  isOfflineError: boolean
  userMessage: string

  constructor(message: string) {
    super(message)
    this.name = 'NetworkError'
    this.code = 'NETWORK_ERROR'
    this.isOfflineError = true
    this.userMessage = "Connection failed. Your changes will sync when you're back online."
  }
}
```

## Nuxt 3 Best Practices _(Required)_

When developing with Nuxt 3, follow these best practices to ensure optimal performance and maintainability, especially for Ghanaian users with varying network conditions.

### 1. **Auto-imports and Composition API**

Leverage Nuxt 3's auto-import system with TypeScript:

```vue
<!-- filepath: components/UserCard.vue -->
<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p v-if="!isOnline" class="offline-notice">
      {{ statusMessage }}
    </p>
    <button @click="handleSync" :disabled="!canSync">
      {{ syncButtonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
interface Props {
  user: UserData
  isOffline?: boolean
}

// ===== Props & Emits =====
const props = withDefaults(defineProps<Props>(), {
  isOffline: false
})

const emit = defineEmits<{
  (e: 'sync'): void
  (e: 'error', error: Error): void
}>()

// ===== Reactive State =====
// Nuxt 3 auto-imports ref, computed, etc.
const networkStatus = ref<ConnectionState>('online')
const syncStatus = ref<SyncStatus>('complete')

// ===== Computed Properties =====
const isOnline = computed(() => networkStatus.value === 'online')

const statusMessage = computed(() =>
  networkStatus.value === 'offline'
    ? 'Working offline - changes will sync when online'
    : 'Connected'
)

const canSync = computed(() => isOnline.value && syncStatus.value !== 'pending')

const syncButtonText = computed(() =>
  syncStatus.value === 'pending' ? 'Syncing...' : 'Sync Now'
)

// ===== Methods =====
function handleSync() {
  if (canSync.value) {
    syncStatus.value = 'pending'
    emit('sync')
  }
}

// ===== Lifecycle =====
onMounted(() => {
  // Initialize network status monitoring
  initNetworkMonitoring()
})
</script>
```

### 2. **Server Routes and API Layer**

Create server-side API routes optimized for Ghana's connectivity:

```typescript
// filepath: server/api/users/[id].get.ts
export default defineEventHandler(async (event) => {
  // ===== Request Handling =====
  const userId = getRouterParam(event, 'id')
  
  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    })
  }

  try {
    // ===== Main Logic =====
    const user = await getUserById(userId)
    
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      })
    }

    // ===== Response Optimization =====
    // Set cache headers for offline functionality
    setHeader(event, 'Cache-Control', 'public, max-age=300, s-maxage=600')
    
    return {
      data: user,
      timestamp: Date.now(),
      success: true
    }
  } catch (error) {
    // ===== Error Handling =====
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch user data',
      data: {
        retryable: true,
        userMessage: 'Unable to load user data. Please check your connection and try again.'
      }
    })
  }
})
```

### 3. **Composables for Shared Logic**

Create reusable composables for common patterns:

```typescript
// filepath: composables/useNetworkStatus.ts
export const useNetworkStatus = () => {
  // ===== Reactive State =====
  const isOnline = ref(true)
  const connectionQuality = ref<'2g' | '3g' | '4g' | 'unknown'>('unknown')
  
  // ===== Methods =====
  const updateConnectionStatus = () => {
    isOnline.value = navigator.onLine
    
    // Detect connection quality if supported
    if ('connection' in navigator) {
      const conn = (navigator as any).connection
      connectionQuality.value = conn.effectiveType || 'unknown'
    }
  }

  // ===== Lifecycle & Event Listeners =====
  onMounted(() => {
    updateConnectionStatus()
    
    window.addEventListener('online', updateConnectionStatus)
    window.addEventListener('offline', updateConnectionStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateConnectionStatus)
    window.removeEventListener('offline', updateConnectionStatus)
  })

  return {
    isOnline: readonly(isOnline),
    connectionQuality: readonly(connectionQuality),
    updateConnectionStatus
  }
}
```

### 4. **Pinia Store Integration**

Set up Pinia stores for offline-capable state management:

```typescript
// filepath: stores/user.ts
export const useUserStore = defineStore('user', () => {
  // ===== State =====
  const users = ref<UserData[]>([])
  const isLoading = ref(false)
  const lastSynced = ref<number | null>(null)
  const pendingChanges = ref<UserData[]>([])

  // ===== Getters =====
  const getUserById = computed(() => {
    return (id: string) => users.value.find(user => user.id === id)
  })

  const hasPendingChanges = computed(() => pendingChanges.value.length > 0)

  // ===== Actions =====
  const fetchUsers = async () => {
    try {
      isLoading.value = true
      
      // Try to fetch from server first
      if (navigator.onLine) {
        const { data } = await $fetch<NuxtApiResponse<UserData[]>>('/api/users')
        users.value = data
        lastSynced.value = Date.now()
        
        // Save to local storage for offline access
        await localforage.setItem('users', data)
      } else {
        // Load from local storage when offline
        const cachedUsers = await localforage.getItem<UserData[]>('users')
        if (cachedUsers) {
          users.value = cachedUsers
        }
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
      // Fallback to cached data
      const cachedUsers = await localforage.getItem<UserData[]>('users')
      if (cachedUsers) {
        users.value = cachedUsers
      }
    } finally {
      isLoading.value = false
    }
  }

  const addUser = async (userData: Omit<UserData, 'id'>) => {
    const newUser: UserData = {
      ...userData,
      id: generateId()
    }

    // Add to local state immediately
    users.value.push(newUser)

    if (navigator.onLine) {
      try {
        await $fetch('/api/users', {
          method: 'POST',
          body: newUser
        })
      } catch (error) {
        // Queue for sync when online
        pendingChanges.value.push(newUser)
      }
    } else {
      // Queue for sync when online
      pendingChanges.value.push(newUser)
    }

    // Save to local storage
    await localforage.setItem('users', users.value)
    await localforage.setItem('pending-changes', pendingChanges.value)
  }

  const syncPendingChanges = async () => {
    if (!navigator.onLine || pendingChanges.value.length === 0) return

    try {
      for (const change of pendingChanges.value) {
        await $fetch('/api/users', {
          method: 'POST',
          body: change
        })
      }
      
      // Clear pending changes after successful sync
      pendingChanges.value = []
      await localforage.setItem('pending-changes', [])
      lastSynced.value = Date.now()
    } catch (error) {
      console.error('Failed to sync pending changes:', error)
    }
  }

  return {
    // State
    users: readonly(users),
    isLoading: readonly(isLoading),
    lastSynced: readonly(lastSynced),
    hasPendingChanges,
    // Actions
    fetchUsers,
    addUser,
    getUserById,
    syncPendingChanges
  }
})
```

### 5. **Pages with SSR/SSG Optimization**

Create pages optimized for Ghana's connectivity:

```vue
<!-- filepath: pages/users/index.vue -->
<template>
  <div class="users-page">
    <!-- ===== Header Section ===== -->
    <header class="page-header">
      <StratoneaLogo />
      <h1 class="text-2xl font-bold">Users</h1>
    </header>

    <!-- ===== Offline Indicator ===== -->
    <OfflineIndicator v-if="!isOnline" />

    <!-- ===== Loading State ===== -->
    <LoadingSpinner v-if="pending" />

    <!-- ===== Users List ===== -->
    <div v-else class="users-grid">
      <UserCard 
        v-for="user in users" 
        :key="user.id" 
        :user="user"
        @sync="handleUserSync"
      />
    </div>

    <!-- ===== Sync Status ===== -->
    <SyncStatus 
      v-if="hasPendingChanges" 
      :pending-count="pendingChanges.length"
      @force-sync="forceSyncAll"
    />
  </div>
</template>

<script setup lang="ts">
// ===== Meta & SEO =====
definePageMeta({
  title: 'Users - Ghana App',
  description: 'Manage users with offline capabilities for Ghana',
})

useSeoMeta({
  title: 'Users - Ghana App',
  ogTitle: 'Users - Ghana App',
  description: 'Manage users with offline capabilities optimized for Ghana',
  ogDescription: 'Manage users with offline capabilities optimized for Ghana',
  ogImage: '/images/users-og.jpg'
})

// ===== Composables & Stores =====
const { isOnline } = useNetworkStatus()
const userStore = useUserStore()

// ===== Data Fetching =====
// Use Nuxt 3's data fetching with offline fallback
const { data: users, pending, error } = await useFetch<UserData[]>('/api/users', {
  // Cache for offline use
  server: true,
  default: () => [],
  // Fallback to store data if fetch fails
  onResponseError() {
    return userStore.users
  }
})

// ===== Computed Properties =====
const hasPendingChanges = computed(() => userStore.hasPendingChanges)
const pendingChanges = computed(() => userStore.pendingChanges)

// ===== Methods =====
const handleUserSync = async () => {
  await userStore.syncPendingChanges()
}

const forceSyncAll = async () => {
  if (isOnline.value) {
    await userStore.syncPendingChanges()
  }
}

// ===== Lifecycle =====
onMounted(() => {
  // Set up automatic sync when coming online
  window.addEventListener('online', handleUserSync)
})

onUnmounted(() => {
  window.removeEventListener('online', handleUserSync)
})
</script>
```

### 6. **Nuxt Configuration for Ghana Context**

Optimize Nuxt configuration for Ghanaian users:

```typescript
// filepath: nuxt.config.ts
export default defineNuxtConfig({
  // ===== Core Configuration =====
  devtools: { enabled: true },
  
  // ===== TypeScript Configuration =====
  typescript: {
    strict: true,
    typeCheck: true
  },

  // ===== CSS Framework =====
  css: ['~/assets/css/main.css'],
  
  // ===== Modules =====
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],

  // ===== Performance Optimizations for Ghana =====
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // ===== Image Optimization =====
  image: {
    // Optimize images for low bandwidth
    quality: 60,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024
    }
  },

  // ===== App Configuration =====
  app: {
    head: {
      title: 'Ghana App - Offline Capable',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mobile-first app optimized for Ghana' },
        // PWA meta tags for offline capability
        { name: 'theme-color', content: '#1F3A8A' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Preload critical fonts for Ghana users
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    }
  },

  // ===== Build Optimizations =====
  build: {
    // Optimize for low-end devices
    transpile: ['localforage']
  },

  // ===== Runtime Configuration =====
  runtimeConfig: {
    // Server-side configuration
    apiSecret: process.env.API_SECRET,
    public: {
      // Client-side configuration
      apiBase: process.env.API_BASE || '/api',
      enableOfflineMode: true,
      ghanaSpecific: {
        enableWhatsAppSharing: true,
        defaultPhoneFormat: '+233',
        currency: 'GHS',
        timezone: 'Africa/Accra'
      }
    }
  },

  // ===== Experimental Features =====
  experimental: {
    // Enable payload extraction for better caching
    payloadExtraction: false, // Disabled for better offline support
  },

  // ===== SSR Configuration =====
  ssr: true, // Enable SSR for better initial load on slow connections

  // ===== Route Rules for Optimization =====
  routeRules: {
    // Static pages for better caching
    '/': { prerender: true },
    '/about': { prerender: true },
    // API routes with caching
    '/api/**': { cors: true, headers: { 'Cache-Control': 's-maxage=300' } },
    // User pages with ISR for balance between fresh data and performance
    '/users/**': { isr: 300 } // Regenerate every 5 minutes
  }
})
```

## Stratonea Tailwind Usage Instruction

Always use Tailwind CSS utility classes directly in the template markup for component styling. Do not use `@apply` inside `<style>` blocks in Vue files. For Nuxt 3, prefer utility classes in the HTML/template for clarity, maintainability, and mobile-first workflow.

## Routing & Layout System

Nuxt 3 uses file-based routing with automatic layout detection. All routes are automatically generated from the `pages/` directory. Layouts are stored in `layouts/` and applied automatically or explicitly.

### Layout Structure Example:

```vue
<!-- filepath: layouts/default.vue -->
<template>
  <div class="app-layout">
    <!-- ===== App Header ===== -->
    <AppHeader />
    
    <!-- ===== Main Content ===== -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- ===== Offline Status ===== -->
    <OfflineStatus />
    
    <!-- ===== Sync Indicator ===== -->
    <SyncIndicator />
  </div>
</template>

<script setup lang="ts">
// ===== Composables =====
const { isOnline } = useNetworkStatus()
const userStore = useUserStore()

// ===== Auto-sync Setup =====
watch(isOnline, (online) => {
  if (online && userStore.hasPendingChanges) {
    userStore.syncPendingChanges()
  }
})
</script>
```

## Stratonea App Header Guideline

For every new Nuxt 3 app, always use the following header pattern:

```vue
<!-- filepath: components/AppHeader.vue -->
<template>
  <header class="flex items-center justify-between px-4 py-3 bg-primary text-white shadow-md">
    <!-- Stratonea Logo on the left -->
    <StratoneaLogo white />
    
    <!-- App Name on the right -->
    <span class="text-lg font-bold tracking-wide">{{ appName }}</span>
  </header>
</template>

<script setup lang="ts">
// ===== Runtime Config =====
const { public: config } = useRuntimeConfig()

// ===== Constants & Config =====
const appName = config.appName || 'Ghana App' // From nuxt.config.ts
</script>
```

## Offline First Strategy

The offline-first approach is crucial for Stratonea Nuxt 3 applications due to intermittent connectivity in Ghana.

### 1. **Data Storage Strategy with Nuxt 3**

```typescript
// filepath: composables/useOfflineStorage.ts
export const useOfflineStorage = () => {
  // ===== Storage Schema =====
  interface StorageSchema {
    version: number
    lastSync: number
    data: Record<string, any>
  }

  // ===== Methods =====
  const initializeStorage = async (): Promise<void> => {
    const schema: StorageSchema = {
      version: 1,
      lastSync: Date.now(),
      data: {}
    }
    
    try {
      await localforage.setItem('app-storage', schema)
    } catch (error) {
      console.error('Failed to initialize storage:', error)
    }
  }

  const saveOffline = async <T>(key: string, data: T): Promise<void> => {
    try {
      await localforage.setItem(key, data)
      
      // Also save to pending changes if modification
      const pendingChanges = await localforage.getItem<T[]>('pending-changes') || []
      pendingChanges.push(data)
      await localforage.setItem('pending-changes', pendingChanges)
    } catch (error) {
      console.error('Failed to save offline data:', error)
    }
  }

  const loadOffline = async <T>(key: string): Promise<T | null> => {
    try {
      return await localforage.getItem<T>(key)
    } catch (error) {
      console.error('Failed to load offline data:', error)
      return null
    }
  }

  return {
    initializeStorage,
    saveOffline,
    loadOffline
  }
}
```

### 2. **Smart Hydration Strategy**

```typescript
// filepath: plugins/offline-hydration.client.ts
export default defineNuxtPlugin(async () => {
  // ===== Network Status Check =====
  const isOnline = navigator.onLine
  
  if (!isOnline) {
    // ===== Offline Hydration =====
    // Delay non-critical hydration to improve performance
    const criticalComponents = ['UserCard', 'AppHeader', 'OfflineIndicator']
    
    // Hydrate critical components first
    await nextTick()
    
    // Defer non-critical component hydration
    setTimeout(() => {
      // Hydrate remaining components
      hydrateRemainingComponents()
    }, 2000)
  }

  // ===== Auto-sync Setup =====
  window.addEventListener('online', async () => {
    const userStore = useUserStore()
    if (userStore.hasPendingChanges) {
      await userStore.syncPendingChanges()
    }
  })
})
```

### 3. **Server-Side Caching for Offline Support**

```typescript
// filepath: server/api/cache/[...path].get.ts
export default defineCachedEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  
  // ===== Cache Configuration for Ghana Context =====
  return {
    // Cache for 5 minutes on server, 10 minutes on CDN
    maxAge: 300,
    swr: true, // Serve stale while revalidating
    varies: ['Accept-Encoding', 'User-Agent'],
    
    // Custom headers for offline support
    headers: {
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
      'X-Ghana-Optimized': 'true'
    }
  }
}, {
  maxAge: 1000 * 60 * 5, // 5 minutes
  name: 'ghana-api-cache',
  getKey: (event) => {
    const path = getRouterParam(event, 'path')
    const query = getQuery(event)
    return `${path}-${JSON.stringify(query)}`
  }
})
```

## Performance Benchmarks for Nuxt 3

Key performance metrics for Ghana-specific conditions with SSR/SSG optimizations:

### Network Performance Targets

| Metric                 | 2G Target | 3G Target | 4G Target | Notes                    |
| ---------------------- | --------- | --------- | --------- | ------------------------ |
| First Contentful Paint | < 3s      | < 1.5s    | < 0.8s    | Improved with SSR        |
| Time to Interactive    | < 8s      | < 4s      | < 2s      | Smart hydration helps    |
| First Input Delay      | < 300ms   | < 200ms   | < 100ms   | Critical interaction     |
| Hydration Time         | < 2s      | < 1s      | < 0.5s    | Nuxt 3 specific metric   |

### Bundle Size Limits

| Type              | Target Size | Notes                           |
| ----------------- | ----------- | ------------------------------- |
| Initial Bundle    | < 200KB     | Reduced with SSR                |
| Route Chunks      | < 80KB      | Smaller with better tree-shaking |
| Critical CSS      | < 15KB      | Above-the-fold styles only      |
| Image Quality     | 50-60%      | Lower for Ghana bandwidth       |

## Testing Guidelines for Nuxt 3

### 1. **Network Condition Testing**

```typescript
// filepath: tests/utils/network-simulator.ts
export class NetworkSimulator {
  static simulate(condition: '2g' | '3g' | '4g' | 'offline'): void {
    if (process.env.NODE_ENV === 'development') {
      const conditions = {
        '2g': { latency: 300, downloadThroughput: (250 * 1024) / 8 },
        '3g': { latency: 100, downloadThroughput: (750 * 1024) / 8 },
        '4g': { latency: 50, downloadThroughput: (4 * 1024 * 1024) / 8 },
        'offline': { offline: true }
      }
      
      // Apply network conditions
      setNetworkConditions(conditions[condition])
    }
  }
}
```

### 2. **Offline Testing**

```typescript
// filepath: tests/offline.test.ts
describe('Offline Functionality', () => {
  beforeEach(() => {
    // Mock offline condition
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: false
    })
  })

  test('should serve cached content when offline', async () => {
    const { data } = await $fetch('/api/users', {
      // Simulate offline fetch
      onRequestError() {
        return getCachedUsers()
      }
    })
    
    expect(data).toBeDefined()
  })

  test('should queue changes for sync when offline', async () => {
    const userStore = useUserStore()
    
    await userStore.addUser({ name: 'Test User', phone: '+233123456789' })
    
    expect(userStore.hasPendingChanges).toBe(true)
  })
})
```

## Communication Guidelines

### 1. **Error Messages**

```typescript
// filepath: utils/error-messages.ts
export const errorMessages = {
  network: {
    offline: 'You are currently offline. Your changes will be saved and uploaded when you\'re back online.',
    slow: 'The connection is slow. Would you like to use less data?',
    timeout: 'The connection timed out. Please check your internet and try again.',
    sync: 'Some changes haven\'t been uploaded yet. They will sync automatically when you\'re online.'
  },
  validation: {
    phone: 'Please enter a valid Ghana phone number (e.g., 024 XXX XXXX)',
    required: 'This information is needed to continue.',
    offline: 'You can fill this in now and we\'ll save it when you\'re back online.'
  },
  success: {
    saved: 'Your information has been saved.',
    sync: 'All your changes have been uploaded successfully.',
    offline: 'Saved offline. Will sync when connected.'
  }
}
```

### 2. **Loading States Component**

```vue
<!-- filepath: components/LoadingState.vue -->
<template>
  <div class="loading-state">
    <!-- ===== Loading Spinner ===== -->
    <Spinner v-if="isLoading" />
    
    <!-- ===== Status Message ===== -->
    <p class="loading-message" role="status" aria-live="polite">
      {{ loadingMessage }}
    </p>
    
    <!-- ===== Offline Indicator ===== -->
    <OfflineIndicator v-if="!isOnline">
      <template #default>
        <p class="text-amber-600">{{ offlineMessage }}</p>
      </template>
    </OfflineIndicator>
    
    <!-- ===== Slow Connection Notice ===== -->
    <SlowConnectionNotice 
      v-if="isSlowConnection" 
      @enable-data-saving="enableDataSaving" 
    />
  </div>
</template>

<script setup lang="ts">
// ===== Props =====
interface Props {
  isLoading?: boolean
  hasCachedData?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  hasCachedData: false
})

// ===== Composables =====
const { isOnline, connectionQuality } = useNetworkStatus()

// ===== Computed Properties =====
const isSlowConnection = computed(() => 
  connectionQuality.value === '2g' || connectionQuality.value === 'slow-3g'
)

const loadingMessage = computed(() =>
  isOnline.value ? 'Loading...' : 'Loading from saved data...'
)

const offlineMessage = computed(() =>
  props.hasCachedData 
    ? 'Working offline with saved data' 
    : 'Cannot load new data while offline'
)

// ===== Methods =====
function enableDataSaving() {
  // Implement data saving mode
  // - Reduce image quality
  // - Disable auto-refresh  
  // - Increase caching
  const userStore = useUserStore()
  userStore.enableDataSavingMode()
}
</script>
```

This updated guideline now specifically covers Nuxt 3 development with all the Ghana-specific optimizations, SSR/SSG benefits, and offline-first approaches tailored for your target market.