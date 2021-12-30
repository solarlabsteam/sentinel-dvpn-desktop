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
  scoped
>
.wallet-address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid $slr__clr-blue-4;
  border-radius: 4px;
  padding: 13px 16px;
  @include font-template(12px, 14px, 400);
}
</style>
