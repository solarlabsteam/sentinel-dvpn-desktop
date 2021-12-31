<template>
  <div class="node-details">
    <div class="node-details__header">
      <node-preview
        :title="node.moniker"
        :country="node.location.country"
        :subtitle="node.address.slice(-6)"
      />

      <slr-icon
        class="node-details__signal"
        :icon="`wifi-signal-${node.bandwidth.signalLevel}`"
      />
    </div>

    <div class="node-details__main">
      <parameter-scale
        :value="node.pricePercentage"
        :title="t('node.parameters.price')"
      />
      <parameter-scale
        :value="node.latencyPercentage"
        :title="t('node.parameters.latency')"
      />
      <parameter-scale
        :value="node.peersPercentage"
        :title="t('node.parameters.peers')"
      />

      <slr-button
        class="node-details__connect-button"
        :disabled="isConnectionLoading"
        @click.stop="() => connect(node)"
      >
        <slr-icon
          :width="17"
          :height="14"
          :icon="'plug'"
        />
      </slr-button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
import ParameterScale from '@/client/components/app/ParameterScale'
import NodePreview from '@/client/components/app/NodePreview'
import useConnect from '@/client/hooks/useConnect'

export default {
  name: 'NodeDetails',

  components: {
    ParameterScale,
    NodePreview
  },

  props: {
    node: {
      type: Object,
      required: true
    }
  },

  setup () {
    const { t } = useI18n()
    const { connect } = useConnect()
    const store = useStore()
    const isConnectionLoading = computed(() => store.getters.isConnectionLoading)

    return {
      t,
      connect,
      isConnectionLoading
    }
  }
}
</script>

<style
  lang="scss"
  src="./NodeDetails.scss"
  scoped
/>
