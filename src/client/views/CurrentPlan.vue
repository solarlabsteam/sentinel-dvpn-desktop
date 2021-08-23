<template>
  <div>
    <span>Current plan</span>
    <span v-if="isSubscriptionLoading">Loading...</span>

    <router-link :to="{name: 'plans'}">
      <quota
        :subscription="currentSubscription"
        :node="selectedNode"
      />
    </router-link>

    <p>
      <span v-if="currentSubscription">{{ currentSubscription.node }}</span>
      <router-link :to="{name: 'nodes'}">
        <button>Change</button>
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters, useStore } from 'vuex'
import Quota from '@/client/components/app/Quota'

export default {
  name: 'Plan',

  components: {
    Quota
  },

  setup () {
    const store = useStore()
    const selectedNode = store.getters.selectedNode
    const handleSelectedNode = node => node && store.dispatch('fetchSubscriptionForNode', JSON.stringify(node))

    if (selectedNode) {
      handleSelectedNode(selectedNode)
    }

    store.watch(
      () => store.getters.selectedNode,
      handleSelectedNode
    )
  },

  computed: {
    ...mapGetters(['isSubscriptionLoading', 'currentSubscription', 'selectedNode'])
  }
}
</script>
