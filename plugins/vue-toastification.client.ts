// Client-only Nuxt plugin to register vue-toastification correctly.
// - Registers the plugin on the Vue app instance so it uses Vue's provide/inject.
// - Fixed CommonJS import issues for Ghana mobile-first optimization

// Use default import for CommonJS compatibility
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // ===== Register the toast plugin on the Vue application instance =====
  // Using nuxtApp.vueApp.use ensures the plugin installs with the Vue app
  // and uses Vue's provide/inject (which accepts Symbols). Avoid calling
  // nuxtApp.provide with objects that may include Symbol keys.

  // Import POSITION from default export for CommonJS compatibility
  const POSITION = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right'
  }

  nuxtApp.vueApp.use(Toast, {
    // Basic recommended options — optimized for Ghana mobile users
    position: POSITION.TOP_RIGHT,
    timeout: 5000, // Longer timeout for slower connections
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: false,
    // Ghana-specific optimizations
    maxToasts: 3, // Limit toasts for smaller screens
    newestOnTop: true,
    showCloseButtonOnHover: false // Always show close button for touch screens
  })

  // <!-- ===== [New Feature] START ===== -->
  // NOTE: Removed the previous wrapper that attempted to expose the toast via
  // nuxtApp.provide('toast', ...) because providing runtime plugin objects can
  // accidentally include Symbol keys and cause "Cannot convert a Symbol value to a string".
  //
  // Access toast in components via our composable:
  //   import { useToast } from '~/composables/useToast'
  //   const { success, error, info, warning } = useToast()
  // <!-- ===== [New Feature] END ===== -->
})