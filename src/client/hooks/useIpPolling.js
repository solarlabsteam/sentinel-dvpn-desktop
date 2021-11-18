import { useStore } from 'vuex'
import axios from 'axios'
import { SET_CURRENT_IP, SET_CURRENT_IP_LOADING_STATE } from '@/client/store/mutation-types'

export default function useIpPolling () {
  const store = useStore()
  let source
  let polling

  const startPolling = () => {
    if (polling) {
      stopPolling()
    }

    fetchCurrentIp()
    polling = setInterval(() => {
      cancelFetch()
      fetchCurrentIp()
    }, 3000)
  }

  const stopPolling = () => {
    cancelFetch()
    clearInterval(polling)
    polling = null
  }

  const fetchCurrentIp = async () => {
    try {
      store.commit(SET_CURRENT_IP_LOADING_STATE, true)
      source = axios.CancelToken.source()
      const { data } = await axios.get('https://api.ipify.org/', {
        cancelToken: source.token
      })
      store.commit(SET_CURRENT_IP, data)
      store.commit(SET_CURRENT_IP_LOADING_STATE, false)
      stopPolling()
    } catch (e) {
      console.error(e)
    }
  }

  const cancelFetch = () => {
    if (!source) return
    source.cancel()
  }

  return { startPolling, stopPolling }
}
