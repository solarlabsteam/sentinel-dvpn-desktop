import { useStore } from 'vuex'
import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'

export default function useSubscription () {
  const store = useStore()
  const emitter = useGlobalEmitter()

  const checkSubscription = async node => {
    await store.dispatch('fetchCheckedSubscriptionForNode', node)
    return !!store.getters.checkedSubscription
  }

  const checkQuota = async subscription => {
    await store.dispatch('fetchCheckedQuota', subscription)
    return !!Number(store.getters.checkedQuota.balanceGb) > 0
  }

  const checkSubscriptionActivity = async node => {
    const isThereSubscription = await checkSubscription(node)
    if (!isThereSubscription) return false

    const isThereQuota = await checkQuota(store.getters.checkedSubscription)
    if (!isThereQuota) return false

    return true
  }

  const promptSubscription = node => {
    emitter.$emit('open-subscription-modal', node)
  }

  return { checkSubscriptionActivity, promptSubscription }
}
