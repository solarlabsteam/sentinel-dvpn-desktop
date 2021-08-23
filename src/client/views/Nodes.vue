<template>
  <div>
    <div>
      <button @click="() => $router.back()">Back</button>
    </div>
    <span v-if="isNodesLoading">Loading...</span>

    <node-list v-if="nodes.length" :nodes="nodes" :fields="['address']">
      <template #actions="{item}">
        <button @click="select(item)">select</button>
      </template>
    </node-list>
  </div>
</template>

<script>
import { mapActions, mapGetters, useStore } from 'vuex'
import NodeList from '@/client/components/app/NodeList'
import { syncStoreValue } from '@/client/store/plugins/syncStore'
import { onMounted } from 'vue'

export default {
  components: { NodeList },
  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchNodes')
    })
  },

  methods: {
    async select (node) {
      await this.clearPreviousNodeState()
      await this.selectNode(node)
      await syncStoreValue('selectedNode', node)
      this.$router.back()
    },

    async clearPreviousNodeState () {
      await this.clearSelectedNode()
      await this.clearSubscriptionForNode()
      await this.clearQuota()
    },

    ...mapActions(['selectNode', 'clearSubscriptionForNode', 'clearQuota', 'clearSelectedNode'])
  },

  computed: {
    ...mapGetters(['nodes', 'isNodesLoading'])
  }
}
</script>
