<template>
  <div class="change-location mb-4">
    <page-header />

    <div v-if="isNodesLoading" class="text-center mb-3">
      <slr-loader :size="25"/>
    </div>

    <ul>
      <li
        v-for="node in nodes"
        class="change-location__node"
        :class="{'change-location__node--selected': node.address === selectedNode?.address}"
        :key="node.address"
        @click="() => select(node)"
      >
        <node-preview
          :title="node.location.country"
          :number="node.address.slice(-6)"
          :size="25"
          :country="node.location.country"
          :subtitle="node.moniker"
        />

        <slr-icon
          :icon="'arrow-top-right'"
          :size="14"
          :rounded="true"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, useStore } from 'vuex'
import NodePreview from '@/client/components/app/NodePreview'
import PageHeader from '@/client/components/app/PageHeader'
import { syncStoreValue } from '@/client/store/plugins/syncStore'
import { computed, onMounted } from 'vue'

export default {
  components: {
    PageHeader,
    NodePreview
  },
  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchNodes')
    })

    return {
      nodes: computed(() => store.getters.nodes),
      isNodesLoading: computed(() => store.getters.isNodesLoading),
      selectedNode: computed(() => store.getters.selectedNode)
    }
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
  }
}
</script>

<style lang="scss">
.change-location {

  &__node {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 35px 6px 30px;
    cursor: pointer;

    &--selected,
    &:hover {
      background-color: $slr__clr-dark-blue-2;
    }
  }
}
</style>
