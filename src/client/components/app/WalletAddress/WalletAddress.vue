<template>
  <div
    class="wallet-address"
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
>
.wallet-address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  @extend .m-s10-lh12;
  @extend .slr-card;
}
</style>
