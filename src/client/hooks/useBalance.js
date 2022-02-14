import { useStore } from 'vuex'
import { computed } from 'vue'
import { DENOM, transactionFee } from '@/shared/constants'
import denomNames from '@/client/constants/denomNames'

export default function useBalance () {
  const store = useStore()
  const amount = computed(() => Number(store.getters.balances.find(b => b.denom === DENOM)?.amount) || 0)
  const dvpn = computed(() => amount.value / denomNames[DENOM].perUnit)
  const isBalancesLoading = computed(() => store.getters.isBalancesLoading)

  const isBalanceEnough = async amount => {
    try {
      await store.dispatch('fetchBalances')
      return store.getters.balances.some(b => {
        return b.denom === DENOM && Number(b.amount) > (amount + transactionFee)
      })
    } catch (e) {
      window.logger.error(e)
      return false
    }
  }

  const fetchBalances = async () => {
    await store.dispatch('fetchBalances')
  }

  return {
    balance: computed(() => dvpn.value.toLocaleString('en')),
    isBalanceEnough,
    fetchBalances,
    isBalancesLoading
  }
}
