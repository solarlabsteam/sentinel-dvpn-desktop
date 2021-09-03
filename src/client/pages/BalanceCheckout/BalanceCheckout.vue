<template>
  <div class="balance-checkout">
    <page-header></page-header>

    <div class="balance-checkout__parameters balance-checkout__padding-wrapper">
      <plan-parameter
        :title="selectedNode.location.country"
        :second-title="selectedNode.address.slice(-6)"
        :parameter="'Country'"
        :country="selectedNode.location.country"
      />
      <plan-parameter
        :title="`${selectedCrypto} ${selectedAmount}`"
        :parameter="'Crypto'"
        :currency="selectedCrypto"
      />
    </div>

    <div class="text-center r-s10-lh12 mb-3">Scan the QR Code</div>
    <qr-code
      class="mb-4"
      :value="user.addressBech32"
      :size="164"
    />

    <div class="balance-checkout__info-message">
      Send only <span class="text-capitalize">{{ selectedCrypto }}</span> to this address. <br>
      Sending any other coins may result in permanent loss.
    </div>

    <div class="balance-checkout__padding-wrapper mb-3">
      <slr-button
        class="balance-checkout__copy-button"
        v-clipboard:copy="user.addressBech32"
        :block="true"
      >
        {{ user.addressBech32 }}
        <slr-icon :width="13" :height="15" :icon="'copy'"/>
      </slr-button>
    </div>

    <div class="balance-checkout__info-message">
      Your transation should be processed within
    </div>

    <slr-timer
      class="b-s15-lh18"
      :time="selectedPlan.payBefore"
      @tick="handleTick"
    />
  </div>
</template>

<script>
import PageHeader from '@/client/components/app/PageHeader'
import PlanParameter from '@/client/pages/Plans/PlanParameter'
import QrCode from '@/client/components/app/QrCode'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { transactionFee } from '@/shared/constants'
import { useRouter } from 'vue-router'
import getUnixTime from 'date-fns/getUnixTime'

export default {
  name: 'BalanceCheckout',

  components: {
    PageHeader,
    PlanParameter,
    QrCode
  },

  setup () {
    const store = useStore()
    const router = useRouter()
    let isSubscriptionLoadingOnce = false

    const checkBalance = async (amount) => {
      try {
        await store.dispatch('fetchBalances')
        return store.getters.balances.some(b => {
          return b.denom === store.getters.selectedCrypto && Number(b.amount) > (amount + transactionFee)
        })
      } catch (e) {
        console.error(e)
        return false
      }
    }

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

      const isEnough = await checkBalance(Number(store.getters.selectedPlan.deposit.amount))

      if (isEnough) {
        isSubscriptionLoadingOnce = true
        try {
          await store.dispatch('subscribeToNode', {
            deposit: store.getters.selectedPlan.deposit,
            node: store.getters.selectedPlan.node
          })
          router.push({ name: 'payment-result' })
        } catch (e) {
          console.log(e)
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
      selectedPlan: computed(() => store.getters.selectedPlan),
      selectedAmount: computed(() => Number(store.getters.selectedPlan.deposit.amount).toLocaleString()),
      user: computed(() => store.getters.user),
      handleTick
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

  &__info-message {
    opacity: 0.4;
    margin-bottom: 10px;
    text-align: center;
    @extend .m-s10-lh12
  }

  &__copy-button.slr-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px;
    background-image: linear-gradient(210.55deg, #1F3A64 -49.23%, #031734 111.47%);
    @extend .m-s10-lh12
  }
}
</style>
