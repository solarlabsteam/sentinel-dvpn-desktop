<template>
  <div
    class="connection-toggle"
    @click="toggleConnect"
  >
    <div class="connection-toggle__layout">
      <slr-loader
        v-if="isConnectionLoading"
        :size="16"
      />
      <slr-icon
        v-else
        :size="20"
        :icon="'triple-arrows-up'"
      />

      <div
        class="connection-toggle__control"
        :class="{'connection-toggle__control--on' : isConnected}"
      />

      <slr-loader
        v-if="isConnectionLoading"
        :size="16"
      />
      <slr-icon
        v-else
        :size="20"
        :icon="'triple-arrows-down'"
      />
    </div>

    <p
      class="connection-toggle__disconnect-label"
      :class="{
        'connection-toggle__disconnect-label--hidden': !isConnected
      }"
    >
      {{ t('connection.disconnectLabel') }}
    </p>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useConnection from '@/client/hooks/useConnection'

export default {
  name: 'ConnectionToggle',

  setup () {
    const store = useStore()
    const { t } = useI18n()
    const { connect, disconnect } = useConnection()

    const selectedNode = computed(() => store.getters.selectedNode)
    const currentSubscription = computed(() => store.getters.currentSubscription)
    const quota = computed(() => store.getters.quota)
    const isConnectionLoading = computed(() => store.getters.isConnectionLoading)

    const toggleConnect = () => {
      if (isConnectionLoading.value) {
        return
      }

      if (store.getters.isConnected) {
        disconnect()
        return
      }

      connect(selectedNode.value)
    }

    return {
      isConnected: computed(() => store.getters.isConnected),
      isConnectionLoading: computed(() => store.getters.isConnectionLoading),
      selectedNode,
      currentSubscription,
      quota,
      toggleConnect,
      t
    }
  }
}
</script>

<style
  lang="scss"
  src="./ConnectionToggle.scss"
  scoped
/>
