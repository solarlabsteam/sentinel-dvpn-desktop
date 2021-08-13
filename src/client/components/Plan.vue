<template>
  <span>Current plan</span>
  <span v-if="isSubscriptionLoading">Loading...</span>

  <router-link :to="{name: 'nodes'}">
    <button>Change</button>
  </router-link>
</template>

<script>
import { mapGetters, useStore } from 'vuex'

export default {
  name: 'Plan',

  setup () {
    const store = useStore()
    const selectedNode = store.getters.selectedNode
    const handleSelectedNode = node => node && store.dispatch('fetchSubscriptionForNode', node)

    if (selectedNode) {
      handleSelectedNode(JSON.stringify(selectedNode))
    }

    store.watch(
      () => selectedNode,
      handleSelectedNode
    )
  },

  computed: {
    ...mapGetters(['isSubscriptionLoading', 'currentSubscription'])
  }
}
</script>
