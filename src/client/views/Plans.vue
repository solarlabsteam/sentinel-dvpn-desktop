<template>
  <div>
    <div>
      <button @click="() => $router.back()">Back</button>
    </div>

    <span v-if="isPaymentLoading">Loading...</span>
    <span v-else>{{ selectedNode.address }}</span>

    <ul v-if="selectedNode">
      <li v-for="plan in planGbs" :key="plan">
        {{ plan }}GB  -  {{ selectedNode.priceList[0].amount * plan }} {{ selectedNode.priceList[0].denom }}

        <button
          @click="buy(selectedNode.priceList[0].amount * plan, selectedNode.priceList[0].denom)"
          :disabled="isPaymentLoading">
          Buy
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Plans',

  setup () {
    const store = useStore()

    return {
      planGbs: [1, 5, 15, 20, 50, 100],
      selectedNode: computed(() => store.getters.selectedNode)
    }
  },

  computed: {
    ...mapGetters(['isPaymentLoading'])
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
