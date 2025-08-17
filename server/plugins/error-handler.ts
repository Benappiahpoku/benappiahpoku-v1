// Node.js process error handler plugin to prevent ECONNRESET crashes
// This prevents unhandledRejection errors from crashing the dev server

export default defineNitroPlugin((_nitroApp) => {
    // ===== [New Feature] START =====
    // Add global error handlers for Node.js process to prevent crashes
    // This is especially important for Ghana users with unstable connections

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
        const error = reason as Error & { code?: string }

        // Only log non-connection reset errors to reduce noise
        if (error?.code !== 'ECONNRESET' && !error?.message?.includes('ECONNRESET')) {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason)
        }

        // Don't exit the process - let it continue running
        // This prevents the dev server from crashing on connection resets
    })

    // Handle uncaught exceptions
    process.on('uncaughtException', (error: Error & { code?: string }) => {
        // Only log non-connection reset errors to reduce noise
        if (error?.code !== 'ECONNRESET' && !error?.message?.includes('ECONNRESET')) {
            console.error('Uncaught Exception:', error)
        }

        // Don't exit the process for connection reset errors
        if (error?.code === 'ECONNRESET' || error?.message?.includes('ECONNRESET')) {
            return
        }

        // For other errors, log and continue (don't crash in development)
        if (process.env.NODE_ENV === 'development') {
            return
        }

        // In production, you might want to exit gracefully
        process.exit(1)
    })

    // ===== [New Feature] END =====
})
