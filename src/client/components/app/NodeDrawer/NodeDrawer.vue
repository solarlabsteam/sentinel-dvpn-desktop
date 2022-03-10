<template>
  <slr-drawer
    class="node-drawer"
    :open="isOpen"
  >
    <template #header>
      <slr-button
        class="node-drawer__close-button"
        :text="true"
        :tiny="true"
        @click="close"
      >
        {{ t('action.back') }}
      </slr-button>

      <account-drawer-open-button />
    </template>

    <template #body>
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
    </template>
  </slr-drawer>
</template>

<script>
import { computed, ref, isRef } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { OpenButton as AccountDrawerOpenButton } from '@/client/components/app/AccountDrawer'
import NodeDetail from '@/client/components/app/NodeDetail'
import NodePreview from '@/client/components/app/NodePreview'
import useConnection from '@/client/hooks/useConnection'
import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'

export default {
  name: 'NodeDrawer',

  components: {
    NodeDetail,
    NodePreview,
    AccountDrawerOpenButton
  },

  setup () {
    const store = useStore()
    const { t } = useI18n()
    const { connect } = useConnection()
    const emitter = useGlobalEmitter()
    const isOpen = ref(false)

    const node = ref(null)
    const domain = computed(() => new URL(node.value?.remoteUrl).hostname)
    const isConnectionLoading = computed(() => store.getters.isConnectionLoading)

    const open = () => {
      isOpen.value = true
    }

    const close = () => {
      isOpen.value = false
    }

    emitter.$on('open-node-drawer', n => {
      if (!n) return

      node.value = isRef(n) ? n.value : n
      open()
    })

    return { node, domain, t, connect, isConnectionLoading, close, isOpen }
  }
}
</script>

<style lang="scss">
.node-drawer {

  &__close-button.slr-button {
    margin-right: auto;
    @include font-template(18px, 27px)
  }
}
</style>
