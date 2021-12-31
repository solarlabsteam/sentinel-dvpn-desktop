<template>
  <div
    v-if="node"
    class="node"
  >
    <page-header
      :to="{name: 'home'}"
      class="mb-4"
    />

    <node-preview
      :title="node.moniker"
      :country="node.location.country"
      :subtitle="node.address.slice(-6)"
      class="mb-5"
    />

    <slr-table class="mb-5">
      <node-detail
        :type="'address'"
        :value="domain"
      />
      <node-detail
        :type="'connectedPeers'"
        :value="node.peers"
      />
      <node-detail
        :type="'uploadSpeed'"
        :value="`${node.bandwidth.uploadDetailed.value} ${node.bandwidth.uploadDetailed.units}`"
      />
      <node-detail
        :type="'provider'"
        :value="'Unknown'"
      />
      <node-detail
        :type="'downloadSpeed'"
        :value="`${node.bandwidth.downloadDetailed.value} ${node.bandwidth.downloadDetailed.units}`"
      />
      <node-detail
        :type="'version'"
        :value="node.version"
      />
      <node-detail
        :type="'type'"
        :value="'Wireguard'"
      />
      <node-detail
        :type="'country'"
        :value="node.location.country"
      />
      <node-detail
        :type="'city'"
        :value="node.location.city"
      />
      <node-detail
        :type="'features'"
        :value="'Features'"
      />
    </slr-table>

    <slr-button
      :block="true"
      :rounded="true"
      :large="true"
      :disabled="isConnectionLoading"
      @click="() => connect(node)"
    >
      {{ t('connection.connectNowButton') }}
    </slr-button>
  </div>
</template>

<script>

import { useStore } from 'vuex'
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NodeDetail from './NodeDetail'
import NodePreview from '@/client/components/app/NodePreview'
import PageHeader from '@/client/components/app/PageHeader'
import useConnect from '@/client/hooks/useConnect'

export default {
  name: 'Node',

  components: {
    NodeDetail,
    NodePreview,
    PageHeader
  },

  setup () {
    const store = useStore()
    const router = useRouter()
    const { t } = useI18n()
    const { connect } = useConnect()

    const node = computed(() => store.getters.detailedNode)
    const domain = computed(() => new URL(node.value?.remoteUrl).hostname)
    const isConnectionLoading = computed(() => store.getters.isConnectionLoading)

    onBeforeMount(async () => {
      if (!node.value) router.replace({ name: 'home' })
    })

    return { node, domain, t, connect, isConnectionLoading }
  }
}
</script>

<style>

</style>
