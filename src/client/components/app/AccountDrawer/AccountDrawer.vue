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

          <slr-button
            :text="true"
            :tiny="true"
            class="ml-1"
            :loading="isBalancesLoading"
            @click="fetchBalances"
          >
            <template #icon="{ loading }">
              <slr-icon
                v-if="!loading"
                :size="14"
                :icon="'refresh'"
              />
            </template>

            <template #default="{ loading }">
              <slr-loader
                v-if="loading"
                :size="14"
              />
            </template>
          </slr-button>
        </p>

        <qr-code
          class="mb-3"
          :value="user?.addressBech32"
          :size="144"
        />

        <div class="account-drawer__scan-tip">
          {{ t('checkout.scanQr') }}
        </div>

        <slr-card class="account-drawer__address">
          <slr-clipboard-text
            class="r-s12-lh15"
            :text="user?.addressBech32"
            :placement="'bottom'"
          />
        </slr-card>

        <slr-button
          :large="true"
          :rounded="true"
          :block="true"
          :href="`https://pay.solarlabs.ee/topup?currency=dvpn&wallet=${user?.addressBech32}`"
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
import QrCode from '@/client/components/app/QrCode'
import useBalance from '@/client/hooks/useBalance'

export default {
  name: 'AccountDrawer',

  components: {
    QrCode
  },

  setup () {
    const store = useStore()
    const isOpen = ref(false)
    const emitter = useGlobalEmitter()
    const { t } = useI18n()
    const { balance, fetchBalances, isBalancesLoading } = useBalance()

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
      t,
      isBalancesLoading,
      fetchBalances
    }
  }
}
</script>

<style lang="scss" src="./AccountDrawer.scss" />
