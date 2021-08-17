<template>
  <div>
    <div>
      <button @click="() => $router.back()">Back</button>
    </div>

    <span v-if="selectedNodeInfoLoading || isPaymentLoading">Loading...</span>
    <span v-else>{{ selectedNodeInfo.address }}</span>

    <ul v-if="selectedNodeInfo">
      <li v-for="plan in planGbs" :key="plan">
        {{ plan }}GB  -  {{ selectedNodeInfo.priceList[0].amount * plan }} {{ selectedNodeInfo.priceList[0].denom }}

        <button
          @click="buy(selectedNodeInfo.priceList[0].amount * plan, selectedNodeInfo.priceList[0].denom)"
          :disabled="isPaymentLoading">
          Buy
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, useStore } from 'vuex'

export default {
  name: 'Plans',

  setup () {
    const store = useStore()
    const selectedNode = store.getters.selectedNode

    store.dispatch('fetchSelectedNodeInfo', JSON.stringify(selectedNode))

    return {
      planGbs: [1, 5, 15, 20, 50, 100]
    }
  },

  computed: {
    ...mapGetters(['selectedNodeInfoLoading', 'selectedNodeInfo', 'selectedNode', 'isPaymentLoading'])
  },

  methods: {
    async buy (amount, denom) {
      const paymentInfo = {
        deposit: { amount: amount.toString(), denom },
        node: this.selectedNode
      }

      try {
        await this.subscribeToNode(paymentInfo)
        this.$router.push({ name: 'home' })
      } catch (e) {
        console.log(e)
      }
    },

    ...mapActions(['subscribeToNode'])
  }
}
</script>

<style
  lang="scss"
>

</style>
