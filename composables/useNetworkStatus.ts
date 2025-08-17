export const useNetworkStatus = () => {
  // ===== Reactive State =====
  const isOnline = ref(true)
  const connectionQuality = ref<'2g' | '3g' | '4g' | 'unknown'>('unknown')
  const lastOnlineTime = ref<number>(Date.now())
  const isSlowConnection = ref(false)

  // ===== Methods =====
  const updateConnectionStatus = () => {
    // Update online status
    isOnline.value = navigator.onLine
    
    // Update last online timestamp when connection is restored
    if (isOnline.value) {
      lastOnlineTime.value = Date.now()
    }
    
    // Detect connection quality if supported (mainly Android Chrome)
    if ('connection' in navigator) {
      const conn = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
      if (conn) {
        connectionQuality.value = (conn.effectiveType as '2g' | '3g' | '4g') || 'unknown'
        
        // Mark as slow connection for Ghana optimization
        isSlowConnection.value = ['slow-2g', '2g'].includes(conn.effectiveType || '')
      }
    }
  }

  const getOfflineDuration = (): number => {
    // Return how long user has been offline (in milliseconds)
    return isOnline.value ? 0 : Date.now() - lastOnlineTime.value
  }

  const isLongOffline = (): boolean => {
    // Consider "long offline" if more than 5 minutes
    const LONG_OFFLINE_THRESHOLD = 5 * 60 * 1000 // 5 minutes
    return getOfflineDuration() > LONG_OFFLINE_THRESHOLD
  }

  // ===== Computed Properties =====
  const connectionType = computed(() => {
    if (!isOnline.value) return 'offline'
    if (isSlowConnection.value) return 'slow'
    return connectionQuality.value
  })

  const statusMessage = computed(() => {
    if (!isOnline.value) {
      const duration = Math.floor(getOfflineDuration() / 1000)
      if (duration < 60) {
        return 'Working offline - changes will sync when online'
      } else {
        const minutes = Math.floor(duration / 60)
        return `Offline for ${minutes} minute${minutes > 1 ? 's' : ''} - changes will sync when online`
      }
    }
    
    switch (connectionQuality.value) {
      case '2g':
        return 'Connected - Slow connection detected'
      case '3g':
        return 'Connected - Standard connection'
      case '4g':
        return 'Connected - Fast connection'
      default:
        return 'Connected'
    }
  })

  const shouldOptimizeForBandwidth = computed(() => {
    // Recommend bandwidth optimization for slow connections
    return isSlowConnection.value || connectionQuality.value === '2g'
  })

  // ===== Network Event Handlers =====
  const handleOnline = () => {
    console.log('🌐 Connection restored')
    updateConnectionStatus()
    
    // Emit custom event for other parts of the app
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('network:online'))
    }
  }

  const handleOffline = () => {
    console.log('📴 Connection lost')
    updateConnectionStatus()
    
    // Emit custom event for other parts of the app
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('network:offline'))
    }
  }

  const handleConnectionChange = () => {
    console.log('📡 Connection quality changed:', connectionQuality.value)
    updateConnectionStatus()
    
    // Emit custom event with connection details
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('network:change', {
        detail: {
          quality: connectionQuality.value,
          isOnline: isOnline.value,
          isSlow: isSlowConnection.value
        }
      }))
    }
  }

  // ===== Lifecycle & Event Listeners =====
  onMounted(() => {
    // Initial connection status check
    updateConnectionStatus()
    
    // Listen for online/offline events
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    // Listen for connection quality changes (if supported)
    if ('connection' in navigator) {
      const conn = (navigator as Navigator & { connection?: { addEventListener?: (type: string, listener: () => void) => void } }).connection
      if (conn && conn.addEventListener) {
        conn.addEventListener('change', handleConnectionChange)
      }
    }
    
    // Log initial status for debugging
    console.log('🔌 Network Status initialized:', {
      isOnline: isOnline.value,
      quality: connectionQuality.value,
      isSlow: isSlowConnection.value
    })
  })

  onUnmounted(() => {
    // Clean up event listeners
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
    
    if ('connection' in navigator) {
      const conn = (navigator as Navigator & { connection?: { removeEventListener?: (type: string, listener: () => void) => void } }).connection
      if (conn && conn.removeEventListener) {
        conn.removeEventListener('change', handleConnectionChange)
      }
    }
  })

  // ===== Return Composable API =====
  return {
    // Reactive state (read-only for external use)
    isOnline: readonly(isOnline),
    connectionQuality: readonly(connectionQuality),
    isSlowConnection: readonly(isSlowConnection),
    lastOnlineTime: readonly(lastOnlineTime),
    
    // Computed properties
    connectionType,
    statusMessage,
    shouldOptimizeForBandwidth,
    
    // Methods
    updateConnectionStatus,
    getOfflineDuration,
    isLongOffline
  }
}