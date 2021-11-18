<template>
  <div
    class="wallet-address slr-card"
  >
    {{ user?.addressBech32 }}
    <slr-copy-button :value="user?.addressBech32" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'WalletAddress',

  setup () {
    const store = useStore()

    return {
      user: computed(() => store.getters.user)
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.wallet-address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  @include font-template(10px, 12px, 500);
}
</style>
