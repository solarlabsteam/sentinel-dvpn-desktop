<template>
  <div class="login">
    <slr-button @click="addAccount()" class="mr-3">Create a new account</slr-button>
    <slr-button @click="askMnemonic()">I have a mnemonic</slr-button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import smalltalk from 'smalltalk'

export default {
  name: 'Login',

  setup () {
    const store = useStore()

    const addAccount = (data) => {
      store.dispatch('addAccount', data)
    }

    const askMnemonic = async () => {
      try {
        const mnemonic = await smalltalk.prompt('', 'Your mnemonic')
        addAccount({ mnemonic })
      } catch (e) {}
    }

    return { addAccount, askMnemonic }
  }
}
</script>
