<template>
<div
  class="connection-toggle"
  :class="{'connection-toggle--disabled': isDisabled}"
  @click="toggleConnect"
>
  <div
    class="connection-toggle__background"
    :class="{'connection-toggle__background--on' : isConnected}"
  >
    <div class="connection-toggle__layout">
      <slr-loader v-if="isConnectionLoading" :size="20"/>
      <span class="text-uppercase" v-else>{{ t('connection.toggle.off') }}</span>

      <div
        class="connection-toggle__control-background"
        :class="{'connection-toggle__control-background--on' : isConnected}"
      >
        <div class="connection-toggle__control">
          <div
            class="connection-toggle__control-indicator connection-toggle__control-indicator-connect"
            :class="{'connection-toggle__control-indicator-connect--on': isConnected}"
          />
          <div>
            <div class="connection-toggle__control-strip" />
            <div class="connection-toggle__control-strip" />
          </div>
          <div
            class="connection-toggle__control-indicator connection-toggle__control-indicator-disconnect"
            :class="{'connection-toggle__control-indicator-disconnect--on': !isConnected}"
          />
        </div>
      </div>

      <slr-loader v-if="isConnectionLoading" :size="20" />
      <span class="text-uppercase" v-else>{{ t('connection.toggle.on') }}</span>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'ConnectionToggle',

  setup () {
    const store = useStore()
    const { t } = useI18n()

    const selectedNode = computed(() => store.getters.selectedNode)
    const currentSubscription = computed(() => store.getters.currentSubscription)
    const quota = computed(() => store.getters.quota)
    const isDisabled = computed(() => !selectedNode.value || !currentSubscription.value || !quota.value)

    const toggleConnect = () => {
      if (store.getters.isConnected) {
        store.dispatch('disconnectFromNode')
        return
      }

      if (isDisabled.value) {
        return
      }

      store.dispatch('connectToNode')
    }

    return {
      isConnected: computed(() => store.getters.isConnected),
      isConnectionLoading: computed(() => store.getters.isConnectionLoading),
      isDisabled,
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
/>
