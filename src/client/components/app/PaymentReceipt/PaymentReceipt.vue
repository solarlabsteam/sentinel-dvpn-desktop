<template>
  <div class="payment-receipt">
    <div class="payment-receipt__date">
      {{ date }}
    </div>
    <div
      v-if="txHash"
      class="payment-receipt__txhash"
    >
      {{ t('payment.check.hash', {hash: croppedHash}) }}
    </div>

    <hr class="payment-receipt__divider">

    <div class="p-relative">
      <slr-icon
        class="payment-receipt__crypto-icon"
        :rounded="true"
        :size="53"
        :icon="crypto"
      />
      <slr-icon
        class="payment-receipt__status-icon"
        :icon="success ? 'success' : 'failed'"
        :rounded="true"
      />
    </div>

    <div class="payment-receipt__crypto">
      {{ crypto }}
    </div>
    <div class="payment-receipt__amount">
      {{ coinsAmount }}
    </div>
    <div class="payment-receipt__description">
      {{ description }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import format from 'date-fns/format'
import { useI18n } from 'vue-i18n'

export default {
  name: 'PaymentReceipt',

  props: {
    success: {
      type: Boolean,
      default: false
    },

    txHash: {
      type: String,
      default: ''
    },

    timestamp: {
      type: Number,
      default: 0
    },

    crypto: {
      type: String,
      default: ''
    },

    amount: {
      type: [Number, String],
      default: 0
    },

    description: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const { t } = useI18n()

    return {
      date: computed(() => format(props.timestamp * 1000, 'dd LLL uuuu p')),
      coinsAmount: computed(() => Number(props.amount).toLocaleString('en')),
      croppedHash: computed(() => props.txHash.slice(0, 12)),
      t
    }
  }
}
</script>

<style
  lang="scss"
  src="./PaymentReceipt.scss"
  scoped
/>
