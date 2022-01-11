<template>
  <div class="login-form">
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
  name: 'LoginForm',

  setup () {
    const store = useStore()
    const { t } = useI18n()

    const addAccount = async (data, isAlertShown = true) => {
      const { mnemonic, ...user } = await store.dispatch('createAccount', data)

      if (isAlertShown) {
        smalltalk.alert(t('account.saveMnemonicTitle'), mnemonic)
      }

      await store.dispatch('setUser', user)
    }

    const askMnemonic = async () => {
      const mnemonic = await smalltalk.prompt('', t('account.inputMnemonicLabel'))
      await addAccount({ mnemonic }, false)
    }

    return { addAccount, askMnemonic, t }
  }
}
</script>
