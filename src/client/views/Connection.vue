<template>
  <div
    class="connection-screen"
    :class="classes"
  >
    <div class="connection-screen__logo-wrapper">
      <router-link :to="{name: 'home'}"><slr-logo /></router-link>
    </div>

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

    <connection-toggle v-if="isServiceServerAvailable" />
    <div class="text-center" v-else>
      <div>
        <slr-loader class="mb-3"/>
      </div>
      <span class="r-s10-lh12">Checking the connection to the server</span>
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
>
.connection-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  padding: 30px;

  &__logo-wrapper {
    align-self: start;
    padding-bottom: 45px;
  }

  &__node {
    margin-bottom: 40px;
  }

  &__ip-info {
    margin-bottom: 50px;
    @extend .r-s10-lh12
  }

  &--blur {
    filter: blur(4px);
  }
}
</style>
