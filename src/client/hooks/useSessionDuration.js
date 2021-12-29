import { onBeforeUnmount, ref } from 'vue'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

export default function useSessionDuration () {
  const duration = ref(null)

  function reset () {
    duration.value = null
  }

  async function store () {
    await syncStoreValue('sessionDuration', duration.value)
  }

  onBeforeUnmount(async () => {
    reset()
    await store()
  })
}
