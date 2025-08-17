// Composable wrapper for @vite-pwa/nuxt's usePWA with safe fallbacks
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

// Export with a new name to provide a consistent API
export const useLocalPWA = () => {
  try {
    // Use @vite-pwa/nuxt's official usePWA composable
    const pwa = usePWA()

    // Ensure all returns are Refs for consistent API
    const offlineReady: Ref<boolean> = computed(() => !!pwa?.offlineReady)
    const needRefresh: Ref<boolean> = computed(() => !!pwa?.needRefresh)
    const showInstallPrompt: Ref<boolean> = computed(() => !!pwa?.showInstallPrompt)

    return {
      offlineReady,
      needRefresh,
      updateAvailable: needRefresh, // Map needRefresh to updateAvailable for compatibility
      showInstallPrompt,
      updateServiceWorker: (reloadPage = true) => {
        if (pwa?.updateServiceWorker) {
          return pwa.updateServiceWorker(reloadPage)
        }
        return Promise.resolve()
      },
      checkForUpdates: async () => {
        // @vite-pwa/nuxt handles updates automatically
        console.log('🔄 PWA updates handled automatically by @vite-pwa/nuxt')
      },
      promptInstall: async () => {
        if (pwa?.install) {
          return pwa.install()
        }
        console.log('📱 Install prompt not available')
      }
    }
  } catch {
    // Fallback for SSR or when @vite-pwa/nuxt is not available
    console.warn('PWA composable not available, using fallbacks')
    return {
      offlineReady: ref(false),
      needRefresh: ref(false),
      updateAvailable: ref(false),
      showInstallPrompt: ref(false),
      updateServiceWorker: async (_reload?: boolean) => { },
      checkForUpdates: async () => { },
      promptInstall: async () => { }
    }
  }
}