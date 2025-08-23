<template>
  <div class="min-h-screen bg-gray-50 pb-16">
  
    <!-- Offline notifications are toast-only now. No OfflineIndicator component used. -->
    

    <!-- Main navigation -->
    <Navigation />

    <!-- Main content slot -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// ===== File imports =====
import { onMounted, watch } from 'vue'
import Navigation from '~/components/layout/Navigation.vue'
import Footer from '~/components/layout/Footer.vue'

// ===== Composables =====
// Explicit imports to make it clear for learning.
// useNetworkStatus provides reactive network state and an update method.
import { useNetworkStatus } from '~/composables/useNetworkStatus'
// useToast provides safe client/server toast functions (you added this).
import { useToast } from '~/composables/useToast'

// ===== Initialize composables =====
const { isOnline, statusMessage, updateConnectionStatus } = useNetworkStatus()
const toast = useToast()

// ===== Lifecycle: initialize connection status and show initial toast if offline =====
onMounted(() => {
  // Ensure the composable has up-to-date state
  updateConnectionStatus()

  // If we're currently offline on mount, show initial info toast (client only)
  if (import.meta.client && !isOnline.value) {
    // useToast functions may be async; calling without await is fine
    toast.info(statusMessage.value || 'You are offline — changes will save locally.')
  }
})

// ===== Watch for changes and show minimal toasts =====
watch(isOnline, (online, previous) => {
  if (!import.meta.client) return // Guard: only run in browser

  // Avoid duplicate notification on initialization if previous is undefined
  if (previous === undefined) return

  if (!online) {
    toast.info(statusMessage.value || 'You are offline — changes will save locally.')
  } else {
    toast.success('Connection restored — syncing in background.')
  }
})
</script>

<style>
/* Small fade utility for future UI tweaks */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>