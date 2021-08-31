<template>
  <div class="plans h-100">
    <div v-if="isPaymentLoading" class="plans__loader-wrapper">
      <slr-loader :size="25" />
    </div>
    <template v-else>
      <page-header :to="{name: 'home'}"/>

      <div class="plans__selects">
        <select-parameter
          :title="selectedNode.location.country"
          :second-title="selectedNode.address.slice(-6)"
          :parameter="'Country'"
          :to="{name: 'plan-change-location'}"
          :country="selectedNode.location.country"
        />
        <select-parameter
          :title="selectedCrypto"
          :parameter="'Crypto'"
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
import { mapActions, useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import PageHeader from '@/client/components/app/PageHeader/PageHeader'
import SelectParameter from './SelectParameter/SelectParameter'
import PlanList from './PlanList/PlanList'
import Plan from './Plan/Plan'

export default {
  name: 'Plans',

  components: {
    PageHeader,
    SelectParameter,
    PlanList,
    Plan
  },

  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('selectCrypto', store.getters.selectedNode.priceList[0].denom)
    })

    return {
      plans: [{
        amountGbs: 1
      }, {
        amountGbs: 5,
        feature: 'new'
      }, {
        amountGbs: 15,
        feature: 'popular'
      }, {
        amountGbs: 20
      }, {
        amountGbs: 50
      }, {
        amountGbs: 100
      }],
      selectedNode: computed(() => store.getters.selectedNode),
      isPaymentLoading: computed(() => store.getters.isPaymentLoading),
      selectedCrypto: computed(() => store.getters.selectedCrypto),
      price: computed(() => store.getters.selectedNode.priceList.find(price => price.denom === store.getters.selectedCrypto))
    }
  },

  methods: {
    async buy (gbs) {
      const amount = this.price.amount * gbs

      await this.selectPlan({
        amountGbs: gbs,
        amount: amount,
        crypto: this.selectedCrypto,
        type: 'Unlimited'
      })

      const paymentInfo = {
        deposit: { amount: amount.toString(), denom: this.selectedCrypto },
        node: this.selectedNode
      }

      try {
        await this.subscribeToNode(paymentInfo)
      } catch (e) {
        console.log(e)
      } finally {
        this.$router.push({ name: 'payment-result' })
      }
    },

    ...mapActions(['subscribeToNode', 'selectCrypto', 'selectPlan'])
  }
}
</script>

<style
  lang="scss"
>
.plans {

  &__selects {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
    padding: 0 30px;
  }

  &__loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
