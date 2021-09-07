<template>
<div class="payment-result">
  <payment-check
    class="payment-result__check"
    :success="paymentResult?.success"
    :tx-hash="paymentResult?.response.txhash"
    :timestamp="paymentResult?.response.timestamp"
    :crypto="selectedPlan?.deposit.denom"
    :amount="selectedPlan?.deposit.amount"
    :description="checkDescription"
  />
  <div class="s-s30-lh33 text-center mb-4">
    <span>Payment</span><br>
    <span>{{ paymentResult?.success ?  t('payment.result.status.success') : t('payment.result.status.failed') }}</span>
  </div>
  <slr-button
    v-if="paymentResult?.success"
    @click="leavePage({name: 'home'})"
  >
    {{ t('payment.result.action.goHome') }}
  </slr-button>
  <slr-button
    v-else
    @click="leavePage({name: 'plans'})"
  >
    {{ t('payment.result.action.checkPlans') }}
  </slr-button>

  <div class="payment-result__background-circle payment-result__background-circle-1" />
  <div class="payment-result__background-circle payment-result__background-circle-2" />
  <div class="payment-result__background-circle payment-result__background-circle-3" />
</div>
</template>

<script>
import PaymentCheck from '@/client/components/app/PaymentCheck'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'PaymentResult',

  components: {
    PaymentCheck
  },

  setup () {
    const store = useStore()
    const router = useRouter()
    const { t } = useI18n()
    const leavePage = async (to) => {
      await router.push(to)
      store.dispatch('clearPaymentResult')
    }

    return {
      selectedPlan: computed(() => store.getters.selectedPlan),
      checkDescription: computed(() => store.getters.selectedPlan?.amountGbs + 'GB ' + store.getters.selectedPlan?.type),
      paymentResult: computed(() => store.getters.paymentResult),
      leavePage,
      t
    }
  }
}
</script>

<style lang="scss">
.payment-result {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  height: 100%;

  &__check {
    z-index: 1;
    margin-bottom: 30px;
  }

  &__background-circle {
    position: absolute;
    border: 1px solid $slr__clr-blue-3;
    border-radius: 50%;
  }

  &__background-circle-1 {
    top: 81px;
    left: -69px;
    width: 138px;
    height: 138px;
  }

  &__background-circle-2 {
    top: 262px;
    left: 204px;
    width: 99px;
    height: 99px;
  }

  &__background-circle-3 {
    top: 45px;
    right: -38px;
    width: 76px;
    height: 76px;
  }
}
</style>
