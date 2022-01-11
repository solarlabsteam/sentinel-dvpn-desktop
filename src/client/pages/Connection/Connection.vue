<template>
  <div class="connection-screen">
    <div class="connection-screen__logo-wrapper">
      <router-link :to="{name: 'home'}">
        <slr-logo />
      </router-link>
    </div>

    <div class="connection-screen__content-wrapper">
      <node-preview
        :title="displayedNode?.location?.country"
        :country="displayedNode?.location?.country"
        :subtitle="displayedNode?.moniker"
        class="connection-screen__node"
      />

      <div class="connection-screen__quota-wrapper">
        <quota
          :amount="quota?.consumedGb"
          :unit="t('quota.unit.gb.title')"
          :bright="isConnected"
        />
      </div>

      <slr-table :outlined="true">
        <connection-detail
          :type="'download'"
          :value="displayedNode?.bandwidth?.downloadDetailed?.value"
          :units="displayedNode?.bandwidth?.downloadDetailed?.units"
        />
        <connection-detail
          :type="'upload'"
          :value="displayedNode?.bandwidth?.uploadDetailed?.value"
          :units="displayedNode?.bandwidth?.uploadDetailed?.units"
        />
        <connection-detail
          :type="'bandwidth'"
          :value="quota?.allocatedGb"
          :units="'GB'"
        />
        <connection-detail
          :type="'duration'"
        />
      </slr-table>

      <div class="connection-screen__toggle-wrapper">
        <connection-toggle v-if="isServiceServerAvailable" />
        <div
          v-else
          class="text-center"
        >
          <div>
            <slr-loader class="mb-3" />
          </div>
          <span class="r-s12-lh15">{{ t('connection.checkingConnection') }}</span>
        </div>
      </div>
    </div>

    <transition name="modal">
      <subscription-modal />
    </transition>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { computed, onMounted, onUnmounted } from 'vue'
import ConnectionDetail from './ConnectionDetail'
import statuses from '@/client/constants/statuses'
import NodePreview from '@/client/components/app/NodePreview'
import ConnectionToggle from '@/client/components/app/ConnectionToggle'
import useStatusPolling from '@/client/hooks/useStatusPolling'
import Quota from '@/client/components/app/Quota'
import SubscriptionModal from '@/client/components/app/SubscriptionModal'

export default {
  name: 'Connection',

  components: {
    ConnectionDetail,
    Quota,
    NodePreview,
    ConnectionToggle,
    SubscriptionModal
  },

  setup () {
    const store = useStore()
    const { t } = useI18n()
    const { startPolling: startStatusPolling, stopPolling: stopStatusPolling } = useStatusPolling()
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
      node => {
        if (!node) return
        handleSelectedNode()
      }
    )

    onMounted(() => {
      startStatusPolling()
    })

    onUnmounted(() => {
      stopStatusPolling()
    })

    const isNodeAvailable = computed(() => store.getters.selectedNode?.status === statuses.STATUS_ACTIVE)
    const isSubscriptionAvailable = computed(() => store.getters.currentSubscription?.status === statuses.STATUS_ACTIVE)
    const isQuotaAvailable = computed(() => Number(store.getters.quota?.balanceGb) > 0)
    return {
      nodeNumber: computed(() => store.getters.selectedNode?.address.slice(-6)),
      isConnectionAvailable: computed(() => isNodeAvailable.value && isSubscriptionAvailable.value && isQuotaAvailable.value),
      currentSubscription: computed(() => store.getters.currentSubscription),
      isConnectionLoading: computed(() => store.getters.isConnectionLoading),
      isConnected: computed(() => store.getters.isConnected),
      displayedNode: computed(() => store.getters.connectedNode || store.getters.selectedNode),
      isServiceServerAvailable: computed(() => store.getters.isServiceServerAvailable),
      quota: computed(() => store.getters.quota),
      isNodeAvailable,
      isSubscriptionAvailable,
      isQuotaAvailable,
      t
    }
  }
}
</script>

<style
  lang="scss"
  src="./Connection.scss"
  scoped
/>
