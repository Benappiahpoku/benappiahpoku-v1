<!-- ===== Toast Test Component ===== -->
<!-- Simple component to test toast functionality for Ghana users -->

<template>
    <div class="toast-test p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">Test Toast Notifications</h3>
        <div class="grid grid-cols-2 gap-2">
            <button
class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors"
                @click="testSuccess">
                Success
            </button>
            <button
class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
                @click="testError">
                Error
            </button>
            <button
class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
                @click="testInfo">
                Info
            </button>
            <button
class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md text-sm transition-colors"
                @click="testWarning">
                Warning
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// ===== Toast Testing =====
// Test component to verify toast functionality works for Ghana users

const { success, error, info, warning } = useToast()

const testSuccess = () => {
    success('Transaction completed successfully!')
}

const testError = () => {
    error('Network error. Please check your connection and try again.')
}

const testInfo = () => {
    info('Your data will sync when you are back online.')
}

const testWarning = () => {
    warning('Low data mode activated to save your bundle.')
}
</script>
