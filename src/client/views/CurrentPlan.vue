<template>
  <div class="current-plan">
    <div class="text-center" v-if="isSubscriptionLoading || isQuotaLoading">
      <slr-loader :size="25" />
    </div>

    <template v-else>
      <div class="current-plan__quotas">
        <quota
          :count="Infinity"
          :units="'DAYS LEFT'"
          :description="'pay-as-you-go'"
          :progress-color="'blue'"
        />

        <quota
          :count="quota?.balanceGb"
          :units="'GB'"
          :description="`remaining of ${Number(quota?.allocatedGb || 0)} GB`"
          :total="quota?.allocatedGb"
          :progress-color="'green'"
        />
      </div>

      <div class="current-plan__change-button-wrapper">
        <slr-button
          :to="{name: 'nodes'}"
          class="current-plan__change-button"
          :block="true"
        >
          <node-preview
            :title="selectedNode?.location.country"
            :number="nodeNumber"
            :size="18"
            :country="selectedNode?.location.country"
          />

          <span class="r-s9-lh11">CHANGE</span>
        </slr-button>
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Quota from '@/client/components/app/Quota/Quota'
import { computed } from 'vue'
import SlrLoader from '@/client/components/ui/SlrLoader/SlrLoader'
import NodePreview from '@/client/components/app/NodePreview/NodePreview'

export default {
  name: 'Plan',

  components: {
    SlrLoader,
    Quota,
    NodePreview
  },

  setup () {
    const store = useStore()
    const selectedNode = store.getters.selectedNode

    const handleSelectedNode = async () => {
      await store.dispatch('fetchSubscriptionForNode')
      if (store.getters.currentSubscription) {
        await store.dispatch('fetchQuota')
      }
    }

    if (selectedNode) {
      handleSelectedNode()
    }

    store.watch(
      () => store.getters.selectedNode,
      handleSelectedNode
    )

    return {
      isSubscriptionLoading: computed(() => store.getters.isSubscriptionLoading),
      currentSubscription: computed(() => store.getters.currentSubscription),
      selectedNode: computed(() => store.getters.selectedNode),
      quota: computed(() => store.getters.quota),
      isQuotaLoading: computed(() => store.getters.isQuotaLoading),
      nodeNumber: computed(() => store.getters.selectedNode?.address.slice(-6)),
      isConnected: computed(() => store.getters.isConnected)
    }
  }
}
</script>

<style lang="scss">
.current-plan {

  &__quotas {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 30px;
  }

  &__change-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 10px !important;
    background-image: linear-gradient(210.55deg, #1F3A64 -49.23%, #031734 111.47%);
  }

  &__change-button-wrapper {
    margin-bottom: 50px;
    padding: 0 30px;
  }
}
</style>
