<template>
  <div
    v-if="showNotification"
    class="fixed bottom-0 right-0 m-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 max-w-sm z-50"
    role="alert"
    aria-live="polite"
  >
    <!-- ===== Content Section ===== -->
    <div class="flex items-center space-x-3">
      <!-- ===== Icon Section ===== -->
      <div class="flex-shrink-0">
        <svg
          v-if="offlineReady"
          class="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg
          v-else-if="needRefresh"
          class="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>

      <!-- ===== Message Section ===== -->
      <div class="flex-1">
        <p v-if="offlineReady" class="text-sm font-medium text-gray-900">
          App ready to work offline
        </p>
        <div v-else-if="needRefresh">
          <p class="text-sm font-medium text-gray-900">New version available</p>
          <p class="text-sm text-gray-500">Update to get the latest features and improvements</p>
        </div>
      </div>
    </div>

    <!-- ===== Button Section ===== -->
    <div class="flex space-x-3 mt-3">
      <button
        v-if="needRefresh"
        class="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 min-h-[48px] touch-target"
        :disabled="updating"
        @click="update"
      >
        <span v-if="updating" class="flex items-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Updating...
        </span>
        <span v-else>Reload</span>
      </button>
      <button
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-h-[48px] touch-target"
        @click="close"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
// Notification component for PWA offline readiness and updates.
// Mobile-first, simple messaging (Stratonea guidelines).

// ===== Imports =====
// Explicit import to satisfy TypeScript when auto-imports aren't available.
import { useLocalPWA } from '~/composables/useLocalPWA'

// ===== Constants & Config =====
const OFFLINE_READY_KEY = 'benappiahpoku-offline-ready-shown'

// ===== Composables =====
const { offlineReady, needRefresh, updateServiceWorker } = useLocalPWA()

// ===== Reactive State =====
const updating = ref(false)
const dismissed = ref(false)
const offlineReadyShown = ref(false)

// ===== Computed Properties =====
const showNotification = computed(
  () => !dismissed.value && (needRefresh.value || (offlineReady.value && !offlineReadyShown.value))
)

// ===== Methods =====
const update = async () => {
  updating.value = true
  try {
    await updateServiceWorker()
  } catch (error) {
    console.error('Failed to update PWA:', error)
    // Optionally show user-facing toast here
  } finally {
    updating.value = false
  }
}

const close = () => {
  dismissed.value = true

  // If closing offlineReady notification, mark as shown permanently
  if (offlineReady.value && !offlineReadyShown.value) {
    if (import.meta.client) {
      localStorage.setItem(OFFLINE_READY_KEY, '1')
    }
    offlineReadyShown.value = true
  }
}

// ===== Lifecycle =====
onMounted(() => {
  if (import.meta.client) {
    offlineReadyShown.value = !!localStorage.getItem(OFFLINE_READY_KEY)
  }
})

// ===== Watchers =====
watch(offlineReady, (newVal) => {
  if (newVal && !offlineReadyShown.value && import.meta.client) {
    localStorage.setItem(OFFLINE_READY_KEY, '1')
    offlineReadyShown.value = true
  }
})
</script>