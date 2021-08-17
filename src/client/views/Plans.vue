<template>
  <div>
    <div>
      <button @click="() => $router.back()">Back</button>
    </div>

    <span v-if="selectedNodeInfoLoading">Loading...</span>
    <span v-else>{{ selectedNodeInfo.address }}</span>

    <table v-if="selectedNodeInfo">
      <thead>
      <tr>
        <td>Denom</td>
        <td>Amount</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="price in selectedNodeInfo.priceList" :key="price.denom">
        <td>{{ price.denom }}</td>
        <td>{{ price.amount }}</td>
        <td>
          <button @click="handleSubscribing" :disabled="selectedNodeInfoLoading">Subscribe</button>
        </td>
      </tr>
      </tbody>
    </table>
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
  },

  computed: {
    ...mapGetters(['selectedNodeInfoLoading', 'selectedNodeInfo'])
  },

  methods: {
    async handleSubscribing () {
      try {
        await this.subscribeToNode(JSON.stringify(this.selectedNodeInfo))
        this.$router.back()
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
