<template>
  <div class="gbs-input">
    <div class="gbs-input__amount">
      <slr-icon
        class="gbs-input__logo"
        :width="24"
        :height="26"
        :icon="'dvpn'"
      />

      {{ amount }}
      DVPN
    </div>

    <div class="gbs-input__controls">
      <slr-button
        class="gbs-input__control gbs-input__control-increase "
        :text="true"
        @click="increase"
      >
        &plus;
      </slr-button>
      <slr-button
        class="gbs-input__control"
        :text="true"
        @click="decrease"
      >
        &minus;
      </slr-button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import denomNames from '@/client/constants/denomNames'

export default {
  name: 'GbsInput',

  props: {
    price: {
      type: [String, Number],
      default: 1
    }
  },

  emits: ['change'],

  setup (props, { emit }) {
    const gbs = ref(1)
    const formattedPrice = computed(() => parseInt(props.price) / denomNames.udvpn.perUnit)
    const amount = computed(() => (gbs.value * formattedPrice.value).toFixed(2))

    const emitAmount = () => {
      emit('change', gbs.value)
    }

    const increase = () => {
      gbs.value += 1
      emitAmount()
    }

    const decrease = () => {
      if (gbs.value <= 1) {
        gbs.value = 1
        return
      }
      gbs.value -= 1
      emitAmount()
    }

    return { increase, decrease, amount }
  }
}
</script>

<style src="./GbsInput.scss" lang="scss" scoped/>
