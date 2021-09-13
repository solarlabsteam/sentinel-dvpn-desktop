<template>
<div class="settings">
  <page-header />

  <div class="mb-5">
    <slr-checkbox
      v-for="server in servers"
      :key="server.name"
      :option="server"
      :active="server.value === selectedDns.value"
      @select="selectDns"
    >
      <template #default="{ option }">
        <slr-icon
          class="mr-3"
          :size="25"
          :icon="option.name.toLowerCase()"
        />

        <span class="m-s12-lh15">{{ option.name }}</span>
      </template>
    </slr-checkbox>
  </div>

  <div class="text-center mb-3">
    <div class="text-center r-s10-lh12 mb-3">{{ t('checkout.scanQr') }}</div>

    <qr-code
      class="mb-4"
      :value="user.addressBech32"
      :size="164"
    />

    <div class="m-s10-lh12 text-center mb-3 opacity-4">
      Send only <span class="text-uppercase">{{ denom }}</span> to this address. <br>
      Sending any other coins may result in permanent loss.
    </div>

    <wallet-address class="mx-5"/>
  </div>

  <div class="px-5 m-s12-lh15 mb-3">
    <span>{{ t('account.balance') }}</span>
    &nbsp;
    <span class="m-s16-lh19">{{ balance }}</span>
    &nbsp;
    <span class="m-s16-lh19 text-uppercase">{{ denom }}</span>
  </div>

  <div class="flex-1" />

  <div class="settings__footer">
    <div class="settings__about">
      <div>
        <img
          class="settings__logo"
          width="10"
          height="10"
          src="/assets/images/small-logo.png"
          alt="logo"
        >
        <span class="settings__about-text">Sentinel V {{ version }}</span>
      </div>
      <span class="settings__about-text">Copyright 2021</span>
    </div>
  </div>
</div>
</template>

<script>
import PageHeader from '@/client/components/app/PageHeader'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import servers from '@/client/constants/dns'
import { useI18n } from 'vue-i18n'
import WalletAddress from '@/client/components/app/WalletAddress'
import QrCode from '@/client/components/app/QrCode'
import { DENOM } from '@/shared/constants'
import denomNames from '@/client/constants/denomNames'
import useBalance from '@/client/hooks/useBalance'

export default {
  name: 'Settings',

  components: {
    PageHeader,
    WalletAddress,
    QrCode
  },

  setup () {
    const store = useStore()
    const { t } = useI18n()
    const { balance } = useBalance()

    onMounted(() => store.dispatch('fetchBalances'))

    return {
      selectedDns: computed(() => store.getters.selectedDns),
      user: computed(() => store.getters.user),
      balance,
      selectDns: (dns) => store.dispatch('selectDns', dns),
      version: process.env.VUE_APP_VERSION,
      servers,
      denom: denomNames[DENOM],
      t
    }
  }
}
</script>

<style
  lang="scss"
>
.settings {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__footer {
    padding: 0 30px;
  }

  &__about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    padding: 20px 0;
  }

  &__logo {
    margin-right: 8px;
    vertical-align: middle;
  }

  &__about-text {
    opacity: .4;
    @extend .m-s9-lh11
  }
}
</style>
