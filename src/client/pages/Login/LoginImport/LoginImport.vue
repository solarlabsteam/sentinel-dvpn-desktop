<template>
  <div class="text-center">
    <slr-textarea
      v-model="mnemonic"
      autofocus
      :label="t('account.inputMnemonicLabel')"
      :wrapper-class-name="'mb-5'"
    />

    <slr-button
      class="mb-5"
      :block="true"
      :rounded="true"
      @click="importAccount(mnemonic)"
    >
      {{ t('account.restoreAccount') }}
    </slr-button>

    <span class="mb-4">OR</span>

    <slr-button
      :text="true"
      :tiny="true"
      @click="createNew()"
    >
      {{ t('account.createNewAccount') }}
    </slr-button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import useAccount from '@/client/hooks/useAccount'

export default {
  name: 'LoginImport',

  setup () {
    const { createNew, importAccount } = useAccount()
    const { t } = useI18n()
    const mnemonic = ref('')

    return { createNew, importAccount, t, mnemonic }
  }
}
</script>
