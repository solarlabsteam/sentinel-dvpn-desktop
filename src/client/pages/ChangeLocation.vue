<template>
  <div class="change-location mb-4">
    <page-header />

    <slr-tabs :default-active-tab="subscribedNodes.length > 0 ? 0 : 1">
      <slr-tab :title="t('route.changeLocation.tab.subscriptions.title')">
        <div
          v-if="isSubscribedNodesLoading"
          class="text-center my-3"
        >
          <slr-loader :size="20" />
        </div>

        <ul v-if="subscribedNodes.length">
          <li
            v-for="node in subscribedNodes"
            :key="node.address"
            class="change-location__node"
            @click="() => openNode(node)"
          >
            <node-details :node="node" />
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
          class="text-center my-3"
        >
          <slr-loader :size="20" />
        </div>

        <ul v-if="nodes.length">
          <li
            v-for="node in nodes"
            :key="node.address"
            class="change-location__node"
            :class="{'change-location__node--selected': node.address === selectedNode?.address}"
            @click="() => openNode(node)"
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
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import NodeDetails from '@/client/components/app/NodeDetails'
import PageHeader from '@/client/components/app/PageHeader'

export default {
  components: {
    PageHeader,
    NodeDetails
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const router = useRouter()

    const openNode = async node => {
      await store.dispatch('setDetailedNode', node)
      router.push({ name: 'node' })
    }

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
      t,
      openNode
    }
  }
}
</script>

<style lang="scss" scoped>
.change-location {

  &__node {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 36px;
    padding-bottom: 27px;
    cursor: pointer;
  }
}
</style>
