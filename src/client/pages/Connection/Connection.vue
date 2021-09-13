<template>
  <div
    class="connection-screen"
    :class="classes"
  >
    <div class="connection-screen__logo-wrapper">
      <router-link :to="{name: 'home'}"><slr-logo /></router-link>
    </div>

    <div class="connection-screen__content-wrapper">
      <div class="connection-screen__content-gap"/>
      <node-preview
        :title="displayedNode?.location.country"
        :number="nodeNumber"
        :size="30"
        :country="displayedNode?.location.country"
        class="connection-screen__node"
      />

      <span class="m-s18-lh22 mb-3">{{ isConnected ? t('connection.connectedStatus') : t('connection.disconnectedStatus') }}</span>
      <div class="connection-screen__ip-info">
        <span v-if="currentIp">
          <span>{{ currentIp }}</span>
          &nbsp;—&nbsp;
          <span>
            <span v-if="isConnected" class="text-green">{{ t('connection.securedIp') }}</span>
            <span v-else class="text-red">{{ t('connection.exposedIp') }}</span>
          </span>
        </span>

        <span v-else>
          {{ t('connection.unknownIp') }}
        </span>
      </div>

      <div
        class="connection-screen__toggle-wrapper"
        :class="{'connection-screen__toggle-wrapper--connected': isConnected}"
      >
        <connection-toggle v-if="isServiceServerAvailable" />
        <div class="text-center" v-else>
          <div>
            <slr-loader class="mb-3"/>
          </div>
          <span class="r-s10-lh12">{{ t('connection.checkingConnection') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, onMounted, onUnmounted, watchEffect } from 'vue'
import statuses from '@/client/constants/statuses'
import NodePreview from '@/client/components/app/NodePreview'
import ConnectionToggle from '@/client/components/app/ConnectionToggle'

export default {
  name: 'Connection',

  components: {
    NodePreview,
    ConnectionToggle
  },

  setup () {
    const store = useStore()
    const route = useRoute()
    const { t } = useI18n()
    let statusFetcher = null

    onMounted(() => {
      statusFetcher = setInterval(() => {
        store.dispatch('fetchServiceServiceAvailability')
      }, 1000)
      store.dispatch('fetchCurrentIp')
    })

    onUnmounted(() => {
      if (!statusFetcher) {
        return
      }
      clearInterval(statusFetcher)
    })

    const unwatch = watchEffect(() => {
      const serviceServiceAvailable = store.getters.isServiceServerAvailable

      if (!serviceServiceAvailable) {
        return
      }

      store.dispatch('fetchConnectionStatus')
      clearInterval(statusFetcher)
      statusFetcher = null
      unwatch()
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
      currentIp: computed(() => store.getters.currentIp),
      isServiceServerAvailable: computed(() => store.getters.isServiceServerAvailable),
      classes: computed(() => ({ 'connection-screen--blur': route.meta.blurConnectionScreen })),
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
/>
