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

      <span class="m-s18-lh22 mb-3">{{ isConnected ? 'Connected' : 'Disconnected' }}</span>
      <div class="connection-screen__ip-info">
        <span v-if="currentIp">
          <span>{{ currentIp }}</span>
          &nbsp;—&nbsp;
          <span>
            <span v-if="isConnected" class="text-green">Secured</span>
            <span v-else class="text-red">IP Address is Exposed</span>
          </span>
        </span>

        <span v-else>
          Unknown IP
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
          <span class="r-s10-lh12">Checking the connection to the server</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import statuses from '@/client/constants/statuses'
import NodePreview from '@/client/components/app/NodePreview/NodePreview'
import ConnectionToggle from '@/client/components/app/ConnectionToggle/ConnectionToggle'
import { computed, onMounted, onUnmounted, watchEffect } from 'vue'

export default {
  name: 'Connection',

  components: {
    NodePreview,
    ConnectionToggle
  },

  setup () {
    const store = useStore()
    const route = useRoute()
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
      isQuotaAvailable
    }
  }
}
</script>

<style
  lang="scss"
  src="./Connection.scss"
/>
