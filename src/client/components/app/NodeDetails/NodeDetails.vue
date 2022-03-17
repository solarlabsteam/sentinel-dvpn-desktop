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
      <slr-popper
        :content="t('node.scale.price', {number: price, denom: denom.name})"
        :hover="true"
      >
        <parameter-scale
          :value="node.pricePercentage"
          :title="t('node.parameters.price')"
        />
      </slr-popper>
      <slr-popper
        :content="t('node.scale.latency', {number: latency})"
        :hover="true"
      >
        <parameter-scale
          :value="node.latencyPercentage"
          :title="t('node.parameters.latency')"
        />
      </slr-popper>
      <slr-popper
        :content="t('node.scale.peers', {min: node.peers, max: node.qos?.max_peers || 100})"
        :hover="true"
      >
        <parameter-scale
          :value="node.peersPercentage"
          :title="t('node.parameters.peers')"
        />
      </slr-popper>

      <slr-button
        class="node-details__connect-button"
        @click.stop="() => unsubscribe(node)"
      >
        unsubscribe
      </slr-button>

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
import useConnection from '@/client/hooks/useConnection'
import ParameterScale from '@/client/components/app/ParameterScale'
import NodePreview from '@/client/components/app/NodePreview'
import denomNames from '@/client/constants/denomNames'

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
    const { connect } = useConnection()
    const store = useStore()
    const isConnectionLoading = computed(() => store.getters.isConnectionLoading)
    const denom = computed(() => denomNames[props.node.price.replace(/[0-9]/g, '')])
    const price = computed(() => Number(props.node.price.replace(/\D+/g, '')) / denom.value.perUnit)
    const latency = computed(() => (props.node.latency / 1000).toFixed(2))

    const unsubscribe = async node => {
      await store.dispatch('unsubscribeFromNode', node)
      await store.dispatch('fetchSubscribedNodes')
    }

    return {
      t,
      connect,
      isConnectionLoading,
      price,
      denom,
      latency,
      unsubscribe
    }
  }
}
</script>

<style
  lang="scss"
  src="./NodeDetails.scss"
  scoped
/>
