<template>
  <div class="login">
    <slr-button
      class="mr-3"
      @click="addAccount()"
    >
      {{ t('account.createNewAccount') }}
    </slr-button>
    <slr-button @click="askMnemonic()">
      {{ t('account.restoreAccount') }}
    </slr-button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import smalltalk from 'smalltalk'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Login',

  setup () {
    const store = useStore()
    const { t } = useI18n()

    const addAccount = (data) => {
      store.dispatch('addAccount', data)
    }

    const askMnemonic = async () => {
      try {
        const mnemonic = await smalltalk.prompt('', t('account.inputMnemonicLabel'))
        addAccount({ mnemonic })
      } catch (e) {}
    }

    return { addAccount, askMnemonic, t }
  }
}
</script>
