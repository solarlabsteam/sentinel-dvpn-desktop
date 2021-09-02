<template>
  <div class="plans h-100">
    <div v-if="isPaymentLoading" class="plans__loader-wrapper">
      <slr-loader :size="25" />
    </div>
    <template v-else>
      <page-header :to="{name: 'home'}"/>

      <div class="plans__parameters">
        <plan-parameter
          :title="selectedNode.location.country"
          :second-title="selectedNode.address.slice(-6)"
          :parameter="'Country'"
          :to="{name: 'plan-change-location'}"
          :country="selectedNode.location.country"
        />
        <plan-parameter
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
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import PageHeader from '@/client/components/app/PageHeader/PageHeader'
import PlanParameter from './PlanParameter/PlanParameter'
import PlanList from './PlanList/PlanList'
import Plan from './Plan/Plan'
import { transactionFee } from '@/shared/constants'
import getUnixTime from 'date-fns/getUnixTime'

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
      selectedPlan: computed(() => store.getters.selectedPlan),
      price: computed(() => store.getters.selectedNode.priceList.find(price => price.denom === store.getters.selectedCrypto))
    }
  },

  methods: {
    async buy (gbs) {
      const amount = this.price.amount * gbs

      await this.selectPlan({
        amountGbs: gbs,
        type: 'Unlimited',
        payBefore: (getUnixTime(new Date()) + 30 * 60) * 1000,
        deposit: { amount: amount.toString(), denom: this.selectedCrypto },
        node: this.selectedNode
      })

      try {
        const isEnough = await this.isBalanceEnough(amount)

        if (!isEnough) {
          this.$router.push({ name: 'balance-checkout' })
          return
        }
        await this.subscribeToNode({
          deposit: this.selectedPlan.deposit,
          node: this.selectedPlan.node
        })
        this.$router.push({ name: 'payment-result' })
      } catch (e) {
        console.log(e)
        this.$router.push({ name: 'payment-result' })
      }
    },

    async isBalanceEnough (amount) {
      try {
        await this.fetchBalances()
        return this.balances.some(b => b.denom === this.selectedCrypto && Number(b.amount) > amount * 1000000000000 + transactionFee)
      } catch (e) {
        console.error(e)
        return false
      }
    },

    ...mapActions(['subscribeToNode', 'selectCrypto', 'selectPlan', 'fetchBalances'])
  },

  computed: {
    ...mapGetters(['balances'])
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
    height: 100%;
  }
}
</style>
