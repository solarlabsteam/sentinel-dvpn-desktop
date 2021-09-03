<template>
<div class="settings">
  <page-header />

  <div class="settings__dns">
    <dns-checkbox
      v-for="server in servers"
      :key="server.name"
      :option="server"
      :active="server.value === selectedDns.value"
      @select="selectDns"
    />
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
import PageHeader from '@/client/components/app/PageHeader/PageHeader'
import DnsCheckbox from '@/client/pages/Settings/DnsCheckbox/DnsCheckbox'
import { useStore } from 'vuex'
import { computed } from 'vue'
import servers from '@/client/constants/dns'

export default {
  name: 'Settings',

  components: {
    PageHeader,
    DnsCheckbox
  },

  setup () {
    const store = useStore()

    return {
      selectedDns: computed(() => store.getters.selectedDns),
      servers,
      selectDns: (dns) => store.dispatch('selectDns', dns),
      version: process.env.VUE_APP_VERSION
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
