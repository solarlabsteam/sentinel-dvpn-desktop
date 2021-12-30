import { useStore } from 'vuex'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

export default function useConnect () {
  const store = useStore()

  const clearPreviousNodeState = async () => {
    await store.dispatch('clearSelectedNode')
    await store.dispatch('clearSubscriptionForNode')
    await store.dispatch('clearQuota')
  }

  const connect = async (node) => {
    if (node.address === store.getters.connectedNode.address) return

    await clearPreviousNodeState()
    await store.dispatch('selectNode', node)
    await syncStoreValue('selectedNode', node)
    await store.dispatch('connectToNode')
  }

  return { connect }
}
