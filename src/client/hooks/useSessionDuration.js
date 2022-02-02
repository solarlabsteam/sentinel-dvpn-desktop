import { onBeforeUnmount, ref } from 'vue'
import { setStoreValue } from '@/client/store/plugins/syncElectronStore'

export default function useSessionDuration () {
  const duration = ref(null)

  function reset () {
    duration.value = null
  }

  async function store () {
    await setStoreValue('sessionDuration', duration.value)
  }

  onBeforeUnmount(async () => {
    reset()
    await store()
  })
}
