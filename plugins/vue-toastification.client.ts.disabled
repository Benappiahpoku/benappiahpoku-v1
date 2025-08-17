// Client-only Nuxt plugin to register vue-toastification correctly.
// - Registers the plugin on the Vue app instance so it uses Vue's provide/inject.
// - Removed attempts to call nuxtApp.provide with runtime objects to avoid
//   "Cannot convert a Symbol value to a string" errors.

// Importing at top-level is safe because this file is client-only (.client.ts)
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // ===== Register the toast plugin on the Vue application instance =====
  // Using nuxtApp.vueApp.use ensures the plugin installs with the Vue app
  // and uses Vue's provide/inject (which accepts Symbols). Avoid calling
  // nuxtApp.provide with objects that may include Symbol keys.
  nuxtApp.vueApp.use(Toast, {
    // Basic recommended options — keep these simple and mobile-friendly
    position: POSITION.TOP_RIGHT,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: false
  })

  // <!-- ===== [New Feature] START ===== -->
  // NOTE: Removed the previous wrapper that attempted to expose the toast via
  // nuxtApp.provide('toast', ...) because providing runtime plugin objects can
  // accidentally include Symbol keys and cause "Cannot convert a Symbol value to a string".
  //
  // If you need a convenient way to access toast in components, use the library's
  // composable directly in client-side code:
  //   import { useToast } from 'vue-toastification'
  //   const toast = useToast()
  //
  // Or attach a simple string-keyed helper to the Vue globalProperties (optional):
  // (uncomment below if you prefer global access — it's purely client-side)
  //
  // nuxtApp.vueApp.config.globalProperties.$toast = () => {
  //   try {
  //     // Lazy import to ensure the plugin is installed
  //     // eslint-disable-next-line @typescript-eslint/no-var-requires
  //     const { useToast } = require('vue-toastification')
  //     return useToast()
  //   } catch (e) {
  //     // eslint-disable-next-line no-console
  //     console.warn('[vue-toastification] useToast not available yet', e)
  //     return null
  //   }
  // }
    // <!-- ===== [New Feature] END ===== -->
})