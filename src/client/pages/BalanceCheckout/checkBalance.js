import { transactionFee } from '@/shared/constants'
import store from '@/client/store/store'

export default async amount => {
  try {
    await store.dispatch('fetchBalances')
    return store.getters.balances.some(b => {
      return b.denom === store.getters.selectedCrypto && Number(b.amount) > (amount + transactionFee)
    })
  } catch (e) {
    console.error(e)
    return false
  }
}
