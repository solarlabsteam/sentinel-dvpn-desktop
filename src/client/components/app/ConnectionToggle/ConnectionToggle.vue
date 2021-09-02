<template>
<div class="connection-toggle" @click="toggleConnect">
  <div
    class="connection-toggle__background"
    :class="{'connection-toggle__background--on' : isConnected}"
  >
    <div class="connection-toggle__layout">
      <slr-loader v-if="isConnectionLoading" :size="20"/>
      <span v-else>OFF</span>

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
      <span v-else>ON</span>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'ConnectionToggle',

  setup () {
    const store = useStore()

    const toggleConnect = () => {
      if (store.getters.isConnected) {
        store.dispatch('disconnectFromNode')
      } else {
        store.dispatch('connectToNode')
      }
    }

    return {
      isConnected: computed(() => store.getters.isConnected),
      isConnectionLoading: computed(() => store.getters.isConnectionLoading),
      toggleConnect
    }
  }
}
</script>

<style
  lang="scss"
  src="./ConnectionToggle.scss"
/>
