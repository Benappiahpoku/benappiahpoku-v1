// ===== Server Error Handler =====
// This handles ECONNRESET and other server-side errors gracefully
export default function (error: Error & { code?: string; statusCode?: number; statusMessage?: string }, _event: unknown) {
    // Handle ECONNRESET errors (common with Chrome DevTools)
    if (error?.code === 'ECONNRESET' || error?.message?.includes('ECONNRESET')) {
        console.warn('Connection reset by client (likely browser refresh or DevTools)')
        return
    }

    // Handle other connection errors
    if (error?.code === 'ECONNABORTED' || error?.code === 'EPIPE') {
        console.warn('Connection aborted by client')
        return
    }

    // Log other errors for debugging
    console.error('Server error:', {
        message: error?.message,
        code: error?.code,
        stack: error?.stack?.split('\n')[0] // Only first line of stack
    })

    // Return a proper error response
    return {
        statusCode: error?.statusCode || 500,
        statusMessage: error?.statusMessage || 'Internal Server Error',
        data: {
            message: process.env.NODE_ENV === 'development'
                ? error?.message
                : 'Something went wrong',
            retryable: true
        }
    }
}
