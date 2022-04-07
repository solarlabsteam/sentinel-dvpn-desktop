<template>
  <div class="change-location">
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
      :default-active-tab="defaultActiveTab"
      class="change-location__tabs"
      :class-content="'change-location__tabs-content'"
      :class-nav="'change-location__tabs-nav'"
      @change="onTabChanged"
    >
      <slr-tab :title="t('route.changeLocation.tab.subscriptions.title')">
        <subscribed-nodes />
      </slr-tab>
      <slr-tab :title="t('route.changeLocation.tab.nodes.title')">
        <available-nodes />
      </slr-tab>
    </slr-tabs>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import SubscribedNodes from './tabs/SubscribedNodes'
import AvailableNodes from './tabs/AvailableNodes'
import PageHeader from '@/client/components/app/PageHeader'
import useNodeTabs from '@/client/pages/ChangeLocation/tabs/useNodeTabs'

export default {
  components: {
    PageHeader,
    SubscribedNodes,
    AvailableNodes
  },

  props: {
    tab: {
      type: Number,
      default: null
    },
    continent: {
      type: String,
      default: null
    }
  },

  setup (props) {
    const store = useStore()
    const { t } = useI18n()
    const router = useRouter()
    const { openNode } = useNodeTabs()
    const displayedContinent = ref(null)
    const subscribedNodes = computed(() => store.getters.subscribedNodes)
    const defaultActiveTab = computed(() => props.tab ?? (subscribedNodes.value.length > 0 ? 0 : 1))

    const fetchNodes = () => {
      store.dispatch('fetchNodes')
      store.dispatch('fetchSubscribedNodes')
    }

    const onTabChanged = tabIdx => {
      router.push({ name: 'home', query: { tab: tabIdx } })
    }

    onBeforeMount(() => {
      displayedContinent.value = props.continent
    })

    return {
      nodes: computed(() => store.getters.nodes),
      isNodesLoading: computed(() => store.getters.isNodesLoading),
      isSubscribedNodesLoading: computed(() => store.getters.isSubscribedNodesLoading),
      t,
      defaultActiveTab,
      openNode,
      displayedContinent,
      onTabChanged,
      fetchNodes
    }
  }
}
</script>

<style lang="scss">
.change-location {
  height: 100%;

  &__list-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 36px;
    padding-bottom: 27px;
    cursor: pointer;

    &--continent {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:first-child {
        padding-top: 26px;
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__step-back.slr-button {
    @include font-template(18px, 27px)
  }

  &__tabs {
    display: flex;
    flex-direction: column;
    height: calc(100% - #{$header-height});
  }

  &__tabs-nav {
    margin-right: 24px;
    margin-left: 20px;
  }

  &__tabs-content {
    overflow-y: auto;
    padding-right: 24px;
    padding-left: 20px;
  }

  &__list-toolbar {
    position: sticky;
    z-index: 100;
    top: 0;
    background-color: $slr__clr-dark-blue;
  }
}
</style>
