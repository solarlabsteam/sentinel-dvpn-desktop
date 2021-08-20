<template>
  <div>
    <p v-if="currentSubscription">{{ currentSubscription.node }}</p>
    <span>{{ isConnected ? 'Connected' : 'Disconnected' }}</span>

    <button @click="disconnect" :disabled="isConnectionLoading">Disconnect}</button>
    <button @click="connect" :disabled="!isConnectionAvailable || isConnectionLoading">Connect</button>

    <p v-if="!isNodeAvailable">Node inactive</p>
    <p v-if="!isSubscriptionAvailable">Subscription inactive</p>
    <p v-if="!isQuotaAvailable">Quota is empty</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import statuses from '@/client/constants/statuses'

export default {
  name: 'Connection',

  computed: {
    isNodeAvailable () {
      return this.selectedNode?.status === statuses.STATUS_ACTIVE
    },
    isSubscriptionAvailable () {
      return this.currentSubscription?.status === statuses.STATUS_ACTIVE
    },
    isQuotaAvailable () {
      return Number(this.quota?.balanceGb) > 0
    },
    isConnectionAvailable () {
      return this.isNodeAvailable && this.isSubscriptionAvailable && this.isQuotaAvailable
    },
    ...mapGetters(['currentSubscription', 'isConnectionLoading', 'isConnected', 'selectedNode', 'quota'])
  },

  methods: {
    connect () {
      this.connectToNode(JSON.stringify(this.currentSubscription))
    },

    disconnect () {
      this.disconnectFromNode()
    },

    ...mapActions(['connectToNode', 'disconnectFromNode'])
  }
}
</script>

<style
  lang="scss"
>

</style>
