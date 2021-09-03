<template>
<div class="payment-check">
  <div class="payment-check__date">{{ date }}</div>
  <div v-if="txHash" class="payment-check__txhash">Ref No: {{ croppedHash }}</div>

  <hr class="payment-check__divider">

  <div class="p-relative">
    <slr-icon
      class="payment-check__crypto-icon"
      :rounded="true"
      :size="53"
      :icon="crypto"
    />
    <slr-icon
      class="payment-check__status-icon"
      :icon="success ? 'success' : 'failed'"
      :rounded="true"
    />
  </div>

  <div class="payment-check__crypto">{{ crypto }}</div>
  <div class="payment-check__amount">{{ coinsAmount }}</div>
  <div class="payment-check__description">{{ description }}</div>
</div>
</template>

<script>
import { computed } from 'vue'
import format from 'date-fns/format'

export default {
  name: 'PaymentCheck',

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
    return {
      date: computed(() => format(props.timestamp * 1000, 'dd LLL uuuu p')),
      coinsAmount: computed(() => Number(props.amount).toLocaleString('en')),
      croppedHash: computed(() => props.txHash.slice(0, 12))
    }
  }
}
</script>

<style
  lang="scss"
  src="./PaymentCheck.scss"
/>
