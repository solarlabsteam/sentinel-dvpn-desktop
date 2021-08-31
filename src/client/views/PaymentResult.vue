<template>
<div class="payment-result">
  <payment-check
    class="mb-5"
    :success="paymentResult?.success"
    :tx-hash="paymentResult?.response.txhash"
    :timestamp="paymentResult?.response.timestamp"
    :crypto="selectedPlan?.crypto"
    :amount="selectedPlan?.amount"
    :description="checkDescription"
  />
  <div class="s-s30-lh33 text-center mb-4">
    <span>Payment</span><br>
    <span>{{ paymentResult?.success ?  'Successful' : 'Failed!' }}</span>
  </div>
  <slr-button
    v-if="paymentResult?.success"
    :to="{name: 'home'}"
  >
    Go to Home
  </slr-button>
  <slr-button
    v-else
    :to="{name: 'plans'}"
  >
    Check plans
  </slr-button>
</div>
</template>

<script>
import PaymentCheck from '@/client/components/app/PaymentCheck/PaymentCheck'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'PaymentResult',

  components: {
    PaymentCheck
  },

  setup () {
    const store = useStore()

    return {
      selectedPlan: computed(() => store.getters.selectedPlan),
      checkDescription: computed(() => store.getters.selectedPlan?.amountGbs + 'GB ' + store.getters.selectedPlan?.type),
      paymentResult: computed(() => store.getters.paymentResult)
    }
  }
}
</script>

<style lang="scss">
.payment-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
