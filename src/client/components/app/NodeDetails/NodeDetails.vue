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
        @click.stop="connect"
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
import { useStore } from 'vuex'
import ParameterScale from '@/client/components/app/ParameterScale'
import NodePreview from '@/client/components/app/NodePreview'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

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

  setup (props) {
    const { t } = useI18n()
    const store = useStore()

    const clearPreviousNodeState = async () => {
      await store.dispatch('clearSelectedNode')
      await store.dispatch('clearSubscriptionForNode')
      await store.dispatch('clearQuota')
    }

    const connect = async () => {
      await clearPreviousNodeState()
      await store.dispatch('selectNode', props.node)
      await syncStoreValue('selectedNode', props.node)
      await store.dispatch('connectToNode')
    }

    return {
      t,
      connect
    }
  }
}
</script>

<style
  lang="scss"
  src="./NodeDetails.scss"
  scoped
/>
