import { useStore } from 'vuex'
import { computed } from 'vue'
import { DENOM, tokensPerDvpn, transactionFee } from '@/shared/constants'

export default function useBalance () {
  const store = useStore()
  const amount = computed(() => Number(store.getters.balances.find(b => b.denom === DENOM)?.amount) || 0)
  const dvpn = computed(() => amount.value / tokensPerDvpn)

  const isBalanceEnough = async amount => {
    try {
      await store.dispatch('fetchBalances')
      return store.getters.balances.some(b => {
        return b.denom === DENOM && Number(b.amount) > (amount + transactionFee)
      })
    } catch (e) {
      console.error(e)
      return false
    }
  }

  return {
    balance: computed(() => dvpn.value.toLocaleString('en')),
    isBalanceEnough
  }
}
