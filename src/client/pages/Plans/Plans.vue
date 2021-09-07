<template>
  <div class="plans">
    <div v-if="isPaymentLoading" class="plans__loader-wrapper">
      <slr-loader :size="25" />
    </div>
    <template v-else>
      <page-header :to="{name: 'home'}"/>

      <div class="plans__parameters">
        <plan-parameter
          :title="selectedNode.location.country"
          :second-title="selectedNode.address.slice(-6)"
          :parameter="t('plan.parameter.country.title')"
          :to="{name: 'plan-change-location'}"
          :country="selectedNode.location.country"
        />
        <plan-parameter
          :title="selectedCrypto"
          :parameter="t('plan.parameter.crypto.title')"
          :currency="selectedCrypto"
        />
      </div>

      <plan-list>
        <plan
          v-for="plan in plans"
          :key="plan.amountGbs"
          :plan="plan"
          @buy="buy"
        />
      </plan-list>
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import PageHeader from '@/client/components/app/PageHeader'
import PlanParameter from './PlanParameter'
import PlanList from './PlanList'
import Plan from './Plan'
import getUnixTime from 'date-fns/getUnixTime'
import plans from '@/client/constants/plans'
import checkBalance from '@/client/pages/BalanceCheckout/checkBalance'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Plans',

  components: {
    PageHeader,
    PlanParameter,
    PlanList,
    Plan
  },

  setup () {
    const store = useStore()
    const router = useRouter()
    const { t } = useI18n()
    const selectedCrypto = computed(() => store.getters.selectedCrypto)
    const selectedNode = computed(() => store.getters.selectedNode)
    const price = computed(() => selectedNode.value.priceList.find(price => price.denom === selectedCrypto.value))
    const selectedPlan = computed(() => store.getters.selectedPlan)
    const isPaymentLoading = computed(() => store.getters.isPaymentLoading)

    onMounted(async () => {
      await store.dispatch('selectCrypto', selectedNode.value.priceList[0].denom)
    })

    const buy = async gbs => {
      const amount = price.value.amount * gbs

      await store.dispatch('selectPlan', {
        amountGbs: gbs,
        type: t('plan.type.unlimited.title'),
        payBefore: (getUnixTime(new Date()) + 30 * 60) * 1000,
        deposit: { amount: amount.toString(), denom: selectedCrypto.value },
        node: selectedNode.value
      })

      try {
        const isEnough = await checkBalance(amount)

        if (!isEnough) {
          router.push({ name: 'balance-checkout' })
          return
        }
        await store.dispatch('subscribeToNode', {
          deposit: selectedPlan.value.deposit,
          node: selectedPlan.value.node
        })
        router.push({ name: 'payment-result' })
      } catch (e) {
        console.error(e)
        router.push({ name: 'payment-result' })
      }
    }

    return { plans, selectedNode, isPaymentLoading, selectedCrypto, selectedPlan, price, buy, t }
  }
}
</script>

<style
  lang="scss"
>
.plans {

  &__parameters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
    padding: 0 30px;
  }

  &__loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
