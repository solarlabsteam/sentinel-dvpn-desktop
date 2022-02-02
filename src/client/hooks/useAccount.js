import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'

export default function useAccount () {
  const store = useStore()
  const router = useRouter()
  const emitter = useGlobalEmitter()
  const openAccountDrawer = () => {
    emitter.$emit('open-account-drawer')
  }

  const createNew = async () => {
    try {
      return await store.dispatch('createAccount')
    } catch (e) {
      router.push({ name: 'login', query: { isImport: true } })
    }
  }

  const importAccount = async mnemonic => {
    await store.dispatch('importAccount', { mnemonic })
    router.push({ name: 'home' })
  }

  const saveUser = async user => {
    await store.dispatch('setUser', user)
  }

  return { openAccountDrawer, createNew, importAccount, saveUser }
}
