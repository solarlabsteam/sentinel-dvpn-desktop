<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import smalltalk from 'smalltalk'

const router = useRouter()
const store = useStore()
const user = computed(() => store.getters.user)
const isUserLoading = computed(() => store.getters.isUserLoading)

onMounted(async () => {
  await store.dispatch('fetchUser')
  const user = store.getters.user

  if (user) {
    router.push({ name: 'home' })
  }
})

const addAccount = (data) => {
  store.dispatch('addAccount', data)
}

const askMnemonic = async () => {
  try {
    const mnemonic = await smalltalk.prompt('', 'Your mnemonic')
    addAccount({ mnemonic })
  } catch (e) {}
}
</script>

<template>
  <div class="login" v-if="!user">
    <slr-loader v-if="isUserLoading" />

    <template v-else>
      <div class="login__logo-wrapper">
        <slr-logo />
      </div>

      <div class="login__buttons">
        <slr-button @click="addAccount()" class="mr-3">Create a new account</slr-button>
        <slr-button @click="askMnemonic()">I have a mnemonic</slr-button>
      </div>
    </template>
  </div>

  <slot v-else></slot>
</template>

<style lang="scss" src="./Login.scss"/>
