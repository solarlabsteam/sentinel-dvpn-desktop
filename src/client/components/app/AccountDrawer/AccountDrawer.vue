<template>
  <slr-drawer
    class="account-drawer"
    :open="isOpen"
    @close="close"
  >
    <template #body>
      <div class="account-drawer__body">
        <p class="account-drawer__title">
          {{ t('account.balance') }}
        </p>
        <p class="account-drawer__balance">
          <span>{{ balance }}</span>&nbsp;<span>DVPN</span>
        </p>

        <qr-code
          class="mb-3"
          :value="user.addressBech32"
          :size="144"
        />

        <div class="account-drawer__scan-tip">
          {{ t('checkout.scanQr') }}
        </div>

        <wallet-address class="account-drawer__address" />

        <slr-button
          :large="true"
          :rounded="true"
          :block="true"
        >
          {{ t('action.topUp') }}
        </slr-button>
      </div>
    </template>
  </slr-drawer>
</template>

<script>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'
import WalletAddress from '@/client/components/app/WalletAddress'
import QrCode from '@/client/components/app/QrCode'
import useBalance from '@/client/hooks/useBalance'

export default {
  name: 'AccountDrawer',

  components: {
    WalletAddress,
    QrCode
  },

  setup () {
    const store = useStore()
    const isOpen = ref(false)
    const emitter = useGlobalEmitter()
    const { t } = useI18n()
    const { balance, fetchBalances } = useBalance()

    const open = () => {
      isOpen.value = true
      fetchBalances()
    }

    const close = () => {
      isOpen.value = false
    }

    emitter.$on('open-account-drawer', n => {
      open()
    })

    return {
      isOpen,
      close,
      user: computed(() => store.getters.user),
      balance,
      t
    }
  }
}
</script>

<style lang="scss" src="./AccountDrawer.scss" />
