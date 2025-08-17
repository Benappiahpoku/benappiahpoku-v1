// ===== Toast Composable =====
// Provides a unified interface for toast notifications optimized for Ghana users
// This composable works with the client-side vue-toastification plugin

interface ToastInterface {
    success: (message: string) => void | Promise<void>
    error: (message: string) => void | Promise<void>
    info: (message: string) => void | Promise<void>
    warning: (message: string) => void | Promise<void>
}

export function useToast(): ToastInterface {
    // Server-side: return console-based fallbacks
    if (import.meta.server) {
        return {
            success: (message: string) => console.log(`SUCCESS: ${message}`),
            error: (message: string) => console.error(`ERROR: ${message}`),
            info: (message: string) => console.info(`INFO: ${message}`),
            warning: (message: string) => console.warn(`WARNING: ${message}`)
        }
    }

    // Client-side: try to use vue-toastification
    return {
        success: async (message: string) => {
            try {
                const { useToast } = await import('vue-toastification')
                const toast = useToast()
                toast.success(message)
            } catch {
                console.log(`SUCCESS: ${message}`)
            }
        },
        error: async (message: string) => {
            try {
                const { useToast } = await import('vue-toastification')
                const toast = useToast()
                toast.error(message)
            } catch {
                console.error(`ERROR: ${message}`)
            }
        },
        info: async (message: string) => {
            try {
                const { useToast } = await import('vue-toastification')
                const toast = useToast()
                toast.info(message)
            } catch {
                console.info(`INFO: ${message}`)
            }
        },
        warning: async (message: string) => {
            try {
                const { useToast } = await import('vue-toastification')
                const toast = useToast()
                toast.warning(message)
            } catch {
                console.warn(`WARNING: ${message}`)
            }
        }
    }
}