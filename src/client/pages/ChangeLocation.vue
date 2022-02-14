<template>
  <div class="change-location mb-4">
    <page-header>
      <slr-button
        :text="true"
        :tiny="true"
        class="mt-1"
        :loading="isNodesLoading || isSubscribedNodesLoading"
        @click="fetchNodes"
      >
        <template #icon="{ loading }">
          <slr-icon
            v-if="!loading"
            :size="14"
            :icon="'refresh'"
          />
        </template>

        <template #default="{ loading }">
          <slr-loader
            v-if="loading"
            :size="16"
          />
        </template>
      </slr-button>
    </page-header>

    <slr-tabs
      :default-active-tab="subscribedNodes.length > 0 ? 0 : 1"
      @change="resetContinent"
    >
      <slr-tab :title="t('route.changeLocation.tab.subscriptions.title')">
        <ul v-if="subscribedNodes.length">
          <li
            v-for="node in subscribedNodes"
            :key="node.address"
            class="change-location__list-item"
            @click="() => openNode(node)"
          >
            <node-details :node="node" />
          </li>
        </ul>

        <p
          v-else
          class="m-s12-lh15 opacity-4 text-center mt-5"
        >
          {{ t('subscription.list.noData') }}
        </p>
      </slr-tab>
      <slr-tab :title="t('route.changeLocation.tab.nodes.title')">
        <ul
          v-if="nodes.length && displayedContinent === null"
        >
          <li
            v-for="(continentNodes, continent) in nodes"
            :key="continent"
            class="change-location__list-item change-location__list-item--continent"
            @click="() => openContinent(continent)"
          >
            <continent-preview
              :continent="continent"
              :nodes-length="continentNodes.length"
            />

            <slr-icon
              :width="7"
              :height="12"
              :icon="'chevron-right'"
              class="mr-3"
            />
          </li>
        </ul>

        <p
          v-if="!nodes.length"
          class="m-s12-lh15 opacity-4 text-center mt-5"
        >
          {{ t('node.list.noData') }}
        </p>

        <template v-for="(continentNodes, continent) in nodes">
          <ul
            v-if="displayedContinent === continent"
            :key="continent"
          >
            <li
              v-for="node in continentNodes"
              :key="node.address"
              class="change-location__list-item"
              @click="() => openNode(node)"
            >
              <node-details :node="node" />
            </li>
          </ul>
        </template>
      </slr-tab>
    </slr-tabs>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import NodeDetails from '@/client/components/app/NodeDetails'
import PageHeader from '@/client/components/app/PageHeader'
import ContinentPreview from '@/client/components/app/ContinentPreview'

export default {
  components: {
    PageHeader,
    NodeDetails,
    ContinentPreview
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const router = useRouter()
    const displayedContinent = ref(null)

    const openContinent = c => {
      displayedContinent.value = c
    }

    const openNode = async node => {
      await store.dispatch('setDetailedNode', node)
      router.push({ name: 'node' })
    }

    const resetContinent = () => {
      displayedContinent.value = null
    }

    const fetchNodes = () => {
      store.dispatch('fetchNodes')
      store.dispatch('fetchSubscribedNodes')
    }

    return {
      nodes: computed(() => store.getters.nodes),
      isNodesLoading: computed(() => store.getters.isNodesLoading),
      subscribedNodes: computed(() => store.getters.subscribedNodes),
      isSubscribedNodesLoading: computed(() => store.getters.isSubscribedNodesLoading),
      selectedNode: computed(() => store.getters.selectedNode),
      t,
      openNode,
      openContinent,
      displayedContinent,
      resetContinent,
      fetchNodes
    }
  }
}
</script>

<style lang="scss" scoped>
.change-location {

  &__list-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 36px;
    padding-bottom: 27px;
    cursor: pointer;

    &--continent {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
