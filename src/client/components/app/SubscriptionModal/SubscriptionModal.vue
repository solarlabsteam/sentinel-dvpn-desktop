<template>
  <slr-modal
    class="subscription-modal"
    :open="isOpen"
    :loading="isPaymentLoading"
    @close="close"
  >
    <template #header>
      {{ t('subscriptionModal.header') }}
    </template>

    <template #body>
      <div class="subscription-modal__body">
        <quota
          class="subscription-modal__quota"
          :amount="amountGb"
          :unit="t('quota.unit.gb.title')"
          :bright="true"
        />

        <gbs-input
          :price="node.price"
          class="subscription-modal__input"
          @change="onInput"
        />
      </div>
    </template>

    <template #footer>
      <slr-loader
        v-if="isPaymentLoading"
        :size="30"
      />
      <slr-button
        v-else
        :large="true"
        :block="true"
        :rounded="true"
        :disabled="isPaymentLoading"
        @click="subscribeAndConnect"
      >
        {{ t('action.subscribe') }}
      </slr-button>
    </template>
  </slr-modal>
</template>

<script>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import useConnection from '@/client/hooks/useConnection'
import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'
import Quota from '@/client/components/app/Quota'
import GbsInput from '@/client/components/app/GbsInput'
import useBalance from '@/client/hooks/useBalance'
import useAccount from '@/client/hooks/useAccount'

export default {
  name: 'SubscriptionModal',

  components: {
    Quota,
    GbsInput
  },

  setup () {
    const { t } = useI18n()
    const emitter = useGlobalEmitter()
    const { isBalanceEnough } = useBalance()
    const { connect } = useConnection()
    const { openAccountDrawer } = useAccount()
    const store = useStore()
    const isOpen = ref(false)
    const amountGb = ref(1)
    const node = ref(null)
    const isPaymentLoading = computed(() => store.getters.isPaymentLoading || store.getters.isBalancesLoading)

    const open = () => {
      isOpen.value = true
    }

    const close = () => {
      isOpen.value = false
    }

    const onInput = (gbs) => {
      amountGb.value = gbs
    }

    const subscribeAndConnect = async () => {
      const amountDeposit = amountGb.value * parseInt(node.value.price)
      const isEnough = await isBalanceEnough(amountDeposit)

      if (!isEnough) {
        close()
        openAccountDrawer()
        return
      }

      await store.dispatch('subscribeToNode', {
        deposit: { amount: amountDeposit.toString(), denom: 'udvpn' },
        node: node.value
      })
      close()
      await connect(node.value)
    }

    emitter.$on('open-subscription-modal', n => {
      node.value = n
      amountGb.value = 1
      open()
    })

    return { amountGb, isOpen, close, t, node, onInput, subscribeAndConnect, isPaymentLoading }
  }
}
</script>

<style lang="scss">
.subscription-modal {

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    align-self: stretch;
  }

  &__quota {
    margin-bottom: 55px;
  }
}
</style>
