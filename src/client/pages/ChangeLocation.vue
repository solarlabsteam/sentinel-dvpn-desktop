<template>
  <div class="change-location mb-4">
    <page-header />

    <slr-tabs :default-active-tab="subscribedNodes.length > 0 ? 0 : 1">
      <slr-tab :title="t('route.changeLocation.tab.subscriptions.title')">
        <div
          v-if="isSubscribedNodesLoading"
          class="text-center mb-3"
        >
          <slr-loader :size="20" />
        </div>

        <ul v-if="subscribedNodes.length">
          <li
            v-for="node in subscribedNodes"
            :key="node.address"
            class="change-location__node"
            :class="{'change-location__node--selected': node.address === selectedNode?.address}"
            @click="() => select(node)"
          >
            <node-preview
              :title="node.location.country"
              :number="node.address.slice(-6)"
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

        <p
          v-else-if="!isSubscribedNodesLoading"
          class="m-s10- lh12 opacity-4 text-center"
        >
          {{ t('subscription.list.noData') }}
        </p>
      </slr-tab>
      <slr-tab :title="t('route.changeLocation.tab.nodes.title')">
        <div
          v-if="isNodesLoading"
          class="text-center mb-3"
        >
          <slr-loader :size="20" />
        </div>

        <ul v-if="nodes.length">
          <li
            v-for="node in nodes"
            :key="node.address"
            class="change-location__node"
            :class="{'change-location__node--selected': node.address === selectedNode?.address}"
            @click="() => select(node)"
          >
            <node-preview
              :title="node.location.country"
              :number="node.address.slice(-6)"
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

        <p
          v-else-if="!isNodesLoading"
          class="m-s12-lh15 opacity-4 text-center"
        >
          {{ t('node.list.noData') }}
        </p>
      </slr-tab>
    </slr-tabs>
  </div>
</template>

<script>
import { mapActions, useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import NodePreview from '@/client/components/app/NodePreview'
import PageHeader from '@/client/components/app/PageHeader'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

export default {
  components: {
    PageHeader,
    NodePreview
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()

    onMounted(() => {
      store.dispatch('fetchNodes')
      store.dispatch('fetchSubscribedNodes')
    })

    return {
      nodes: computed(() => store.getters.nodes),
      isNodesLoading: computed(() => store.getters.isNodesLoading),
      subscribedNodes: computed(() => store.getters.subscribedNodes),
      isSubscribedNodesLoading: computed(() => store.getters.isSubscribedNodesLoading),
      selectedNode: computed(() => store.getters.selectedNode),
      t
    }
  },

  methods: {
    async select (node) {
      await this.clearPreviousNodeState()
      await this.selectNode(node)
      await syncStoreValue('selectedNode', node)
      this.$router.push({ path: window.history.state.back })
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

<style lang="scss" scoped>
.change-location {

  &__node {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 6px 35px 6px 30px;
    cursor: pointer;

    &--selected,
    &:hover {
      background-color: $slr__clr-dark-blue-2;
    }
  }
}
</style>
