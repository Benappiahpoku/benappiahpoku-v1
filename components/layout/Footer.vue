<template>
  <!-- Footer container -->
  <footer class="bg-primary-600 text-white mt-auto mb-28">
    <!-- Main inner wrapper -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Two-column responsive grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <!-- ===== Contact Section ===== -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Help Us Improve - Share Your Feedback</h3>

          <div class="space-y-3">
            <!-- WhatsApp link (uses inline SVG to avoid external icon registration issues) -->
            <a
              href="https://wa.me/233594093926"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 hover:text-primary-200 transition-colors"
              aria-label="Open WhatsApp chat"
            >
              <!-- Inline WhatsApp SVG -->
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.373 0 .003 5.373 0 12c0 2.115.557 4.187 1.613 6.02L0 24l6.127-1.605A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.922-.45-3.737-1.48-5.52zM12 21.6a9.6 9.6 0 0 1-4.927-1.35l-.354-.213-3.64.953.97-3.553-.231-.36A9.6 9.6 0 1 1 21.6 12 9.61 9.61 0 0 1 12 21.6zM17.3 14.05c-.248-.124-1.471-.726-1.7-.808-.228-.083-.394-.124-.56.124-.167.248-.646.808-.792.975-.146.166-.292.186-.54.062-.248-.124-1.048-.386-1.99-1.227-.736-.656-1.232-1.466-1.376-1.714-.146-.248-.016-.382.108-.506.11-.11.248-.292.372-.439.124-.148.166-.248.248-.413.082-.165.041-.31-.02-.434-.062-.124-.56-1.354-.768-1.854-.202-.476-.407-.412-.56-.42l-.477-.009c-.165 0-.434.062-.66.31-.227.248-.866.846-.866 2.062 0 1.216.887 2.392 1.01 2.561.124.165 1.75 2.68 4.242 3.758 2.493 1.08 2.493.72 2.94.675.447-.041 1.454-.593 1.66-1.166.206-.574.206-1.064.144-1.166-.062-.103-.227-.165-.476-.29z"/>
              </svg>
              <span>WhatsApp: +233 59 409 3926</span>
            </a>

            <!-- Email link with inline envelope SVG -->
            <a
              href="mailto:stratoneaconsult@gmail.com"
              class="flex items-center justify-center gap-2 hover:text-primary-200 transition-colors"
              aria-label="Send email"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>stratoneaconsult@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- ===== Support Section ===== -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Support Our Mission</h3>
          <p class="text-sm text-primary-100">Help us keep this tool free for SMEs across Ghana</p>

          <!-- Mobile Money Button -->
          <button
            class="w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 rounded-lg transition-colors"
            aria-label="Copy mobile money number"
            @click="copyToClipboard('0594093926')"
          >
            <!-- Mobile icon -->
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18a1 1 0 1 0 .001-1.999A1 1 0 0 0 12 20z"/>
            </svg>

            <span>MTN MoMo: 0594093926</span>

            <!-- Copy icon -->
            <svg class="w-4 h-4 ml-2 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </button>
          <p class="text-xs text-primary-200">Click to copy number</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-primary-500 my-8 max-w-xs mx-auto" />

      <!-- Footer Bottom -->
      <div class="text-center space-y-4">
        <p class="text-sm text-primary-200">
          <!-- Display current year provided by script -->
          © {{ currentYear }} Created with
          <span class="mx-1 animate-pulse" aria-hidden="true">❤️</span>
          by <a class="underline hover:text-white" href="https://www.teklumin.com/" target="_blank" rel="noopener noreferrer">TekLumin</a>
        </p>

        <div class="flex items-center justify-center gap-2 text-xs text-primary-200">
          <span>Made in</span>
          <img src="/ghana-flag.webp" alt="Ghana Flag" class="w-4 h-4 rounded-sm" >
          <span>Ghana</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// ===== Imports =====
// Use a small composable for toasts (keeps notifications consistent)
import { useToast } from '@/composables/useToast'


/*
  ===== [New/Fixed] Notes =====
  - Replaced FontAwesome usage with inline SVGs to avoid runtime errors
    when FontAwesome isn't registered globally.
  - Moved dynamic values (currentYear) into script to keep template simple.
  - Improved accessibility: aria-labels for actionable items.
*/

const toast = useToast()

// Expose current year for template
const currentYear = new Date().getFullYear()

/**
 * copyToClipboard
 * - Copies provided text to clipboard and shows a success/error toast.
 * - Uses navigator.clipboard if available; falls back to a textarea method.
 */
async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    toast?.success?.('MoMo number copied! Thank you for your support! 🙏')
  } catch (error) {
    // Log error for debugging while keeping user message simple
    console.error(error)
    toast?.error?.('Could not copy number. Please try manually.')
  }
}
</script>

<style scoped>
/* Small transform on hover for buttons/links */
a:hover,
button:hover {
  transform: translateY(-1px);
}

/* Smooth transition */
a,
button {
  transition: transform 150ms ease, background-color 150ms ease;
}
</style>