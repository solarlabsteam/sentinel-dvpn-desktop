<template>
  <div class="login" v-if="!isLogin">
    <slr-loader v-if="isLoginCheckLoading || isAccountLoading" />

    <template v-else>
      <div class="login__logo-wrapper">
        <slr-logo />
      </div>

      <div class="login__buttons">
        <slr-button @click="addAccount" class="mr-3">Create a new account</slr-button>
        <slr-button @click="addAccount({mnemonic: 'join never syrup early any police ready chapter marine play main shine expose tube congress assault crucial senior stove abuse forum dolphin order elder'})">I have a mnemonic</slr-button>
      </div>
    </template>
  </div>

  <slot v-else></slot>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'Login',

  setup () {
    const router = useRouter()
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('fetchUserLogin')
      const isLogin = store.getters.isLogin

      if (isLogin) {
        router.push({ name: 'home' })
      }
    })

    return {
      isLogin: computed(() => store.getters.isLogin),
      isLoginCheckLoading: computed(() => store.getters.isLoginCheckLoading),
      isAccountLoading: computed(() => store.getters.isAccountLoading),
      addAccount: () => store.dispatch('addAccount')
    }
  }
}
</script>

<style lang="scss">
.login {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;

  &__logo-wrapper {
    margin-top: auto;
    text-align: center;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    width: 100%;
  }
}
</style>
