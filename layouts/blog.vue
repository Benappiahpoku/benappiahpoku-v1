<!-- ===== [New Feature] START ===== -->
<template>
  <!-- Layout wrapper -->
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <!-- ===== Header ===== -->
    <header class="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Simple inline logo placeholder -->
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#1f3a8a"/>
        </svg>
        <div class="leading-tight">
          <div class="text-sm font-semibold" aria-label="app name">{{ appName }}</div>
          <div class="text-xs text-slate-500">Blog</div>
        </div>
      </div>

      <!-- Offline indicator / status -->
      <div class="text-sm">
        <span
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
          :class="isOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
          role="status"
          aria-live="polite"
        >
          <span aria-hidden="true">{{ isOnline ? '🟢' : '🟠' }}</span>
          {{ isOnline ? 'Online' : 'Offline' }}
        </span>
      </div>
    </header>

    <!-- ===== Main content area ===== -->
    <main class="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
      <!-- Slot where pages render -->
      <slot />
    </main>

    <!-- ===== Footer ===== -->
    <footer class="w-full bg-white border-t px-4 py-3 text-center text-xs text-slate-500">
      © {{ new Date().getFullYear() }} · {{ appName }} · Built for low-bandwidth users
    </footer>
  </div>
</template>

<script setup lang="ts">
// ===== Layout logic =====
// Provide app name from runtime config and a small online/offline monitor.
// This is intentionally small and dependency-free so the layout is safe to copy-paste.

import { ref, onMounted, onUnmounted } from 'vue'

/** Runtime config: reads public.appName if set in nuxt.config */
const { public: runtimePublic } = useRuntimeConfig() as { public: { appName?: string } }
const appName = runtimePublic?.appName || 'Ghana App'

/** Simple network status reactive flag */
const isOnline = ref<boolean>(true)

function updateNetwork() {
  // navigator may be undefined during SSR; guard for safety
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    isOnline.value = navigator.onLine
  } else {
    isOnline.value = true
  }
}

onMounted(() => {
  updateNetwork()
  window.addEventListener('online', updateNetwork)
  window.addEventListener('offline', updateNetwork)
})

onUnmounted(() => {
  window.removeEventListener('online', updateNetwork)
  window.removeEventListener('offline', updateNetwork)
})
</script>
<!-- ===== [New Feature] END ===== -->