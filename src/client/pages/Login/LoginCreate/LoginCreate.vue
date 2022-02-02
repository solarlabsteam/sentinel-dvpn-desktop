<template>
  <div>
    <slr-card
      class="mb-4"
      :title="t('account.wallet')"
    >
      {{ user?.addressBech32 }}
    </slr-card>

    <slr-card
      class="mb-4"
      :title="t('account.mnemonic')"
    >
      <slr-clipboard-text :text="user?.mnemonic" />
    </slr-card>

    <slr-card class="mb-5 text-center">
      <span class="r-s12-lh15 opacity-4">{{ t('account.saveMnemonicNote') }}</span>
    </slr-card>

    <slr-button
      :block="true"
      :rounded="true"
      @click="goToHome"
    >
      {{ t('action.continue') }}
    </slr-button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import useAccount from '@/client/hooks/useAccount'

export default {
  name: 'LoginCreate',
  components: {},

  setup () {
    const user = ref(null)
    const { t } = useI18n()
    const { createNew, saveUser } = useAccount()
    const router = useRouter()
    const goToHome = () => {
      router.push({ name: 'home' })
      saveUser(user.value)
    }

    onBeforeMount(async () => {
      user.value = await createNew()
    })

    return { user, t, goToHome }
  }
}
</script>
