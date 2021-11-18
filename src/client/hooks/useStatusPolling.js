import { useStore } from 'vuex'
import { watchEffect } from 'vue'

export default function useStatusPolling () {
  const store = useStore()
  let polling

  const startPolling = () => {
    polling = setInterval(() => {
      store.dispatch('fetchConnectionServerAvailability')
    }, 1000)
  }

  const stopPolling = () => {
    clearInterval(polling)
  }

  const unwatch = watchEffect(() => {
    const serviceServiceAvailable = store.getters.isServiceServerAvailable

    if (!serviceServiceAvailable) {
      return
    }

    store.dispatch('fetchConnectionStatus')
    clearInterval(polling)
    unwatch()
  })

  return { stopPolling, startPolling }
}
