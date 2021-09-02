<template>
  <div class="login" v-if="!user">
    <slr-loader v-if="isUserLoading" />

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
      await store.dispatch('fetchUser')
      const user = store.getters.user

      if (user) {
        router.push({ name: 'home' })
      }
    })

    return {
      user: computed(() => store.getters.user),
      isUserLoading: computed(() => store.getters.isUserLoading),
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
