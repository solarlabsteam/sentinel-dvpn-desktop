<template>
  <div class="balance-checkout">
    <page-header></page-header>

    <div class="balance-checkout__parameters balance-checkout__padding-wrapper">
      <plan-parameter
        :title="selectedNode.location.country"
        :second-title="selectedNode.address.slice(-6)"
        :parameter="t('plan.parameter.country.title')"
        :country="selectedNode.location.country"
      />
      <plan-parameter
        :title="`${selectedCryptoName} ${selectedAmount}`"
        :parameter="t('plan.parameter.crypto.title')"
        :currency="selectedCrypto"
      />
    </div>

    <div class="text-center r-s10-lh12 mb-3">{{ t('checkout.scanQr') }}</div>
    <qr-code
      class="mb-4"
      :value="user.addressBech32"
      :size="164"
    />

    <div class="balance-checkout__message">
      Send only <span class="text-uppercase">{{ selectedCryptoName }}</span> to this address. <br>
      Sending any other coins may result in permanent loss.
    </div>

    <div class="balance-checkout__padding-wrapper mb-3">
      <wallet-address />
    </div>

    <div class="balance-checkout__message">
      {{ t('checkout.message.timer') }}
    </div>

    <slr-timer
      class="b-s15-lh18"
      :time="selectedPlan.payBefore"
      @tick="handleTick"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import getUnixTime from 'date-fns/getUnixTime'
import { useI18n } from 'vue-i18n'
import WalletAddress from '@/client/components/app/WalletAddress'
import QrCode from '@/client/components/app/QrCode'
import PlanParameter from '@/client/pages/Plans/PlanParameter'
import PageHeader from '@/client/components/app/PageHeader'
import denomNames from '@/client/constants/denomNames'
import { tokensPerDvpn } from '@/shared/constants'
import useBalance from '@/client/hooks/useBalance'

export default {
  name: 'BalanceCheckout',

  components: {
    PageHeader,
    PlanParameter,
    QrCode,
    WalletAddress
  },

  setup () {
    const store = useStore()
    const router = useRouter()
    const { t } = useI18n()
    const { isBalanceEnough } = useBalance()
    let isSubscriptionLoadingOnce = false

    const setFailedResult = async () => {
      await store.dispatch('setPaymentResult', {
        success: false,
        response: {
          timestamp: getUnixTime(new Date())
        }
      })
    }

    const handleTick = async (ms) => {
      if (isSubscriptionLoadingOnce) {
        return
      }

      const isEnough = await isBalanceEnough(Number(store.getters.selectedPlan.deposit.amount))

      if (isEnough) {
        isSubscriptionLoadingOnce = true
        try {
          await store.dispatch('subscribeToNode', {
            deposit: store.getters.selectedPlan.deposit,
            node: store.getters.selectedPlan.node
          })
          router.push({ name: 'payment-result' })
        } catch (e) {
          console.error(e)
          router.push({ name: 'payment-result' })
        }
      }

      if (ms === 0) {
        await setFailedResult()
        router.push({ name: 'payment-result' })
      }
    }

    return {
      selectedNode: computed(() => store.getters.selectedNode),
      selectedCrypto: computed(() => store.getters.selectedCrypto),
      selectedCryptoName: computed(() => denomNames[store.getters.selectedCrypto]),
      selectedPlan: computed(() => store.getters.selectedPlan),
      selectedAmount: computed(() => Number(store.getters.selectedPlan.deposit.amount / tokensPerDvpn).toLocaleString('en')),
      user: computed(() => store.getters.user),
      handleTick,
      t
    }
  }
}
</script>

<style
  lang="scss"
>
.balance-checkout {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__padding-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 0 30px;
  }

  &__parameters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
  }

  &__qr-wrapper {
    border-radius: 15px;
  }

  &__message {
    opacity: 0.4;
    margin-bottom: 10px;
    text-align: center;
    @extend .m-s10-lh12
  }
}
</style>
