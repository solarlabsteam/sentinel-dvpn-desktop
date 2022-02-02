<template>
  <div
    class="quota"
    :class="classes"
  >
    <div class="quota__amount">
      {{ displayedAmount }}
    </div>
    <div class="quota__unit">
      {{ unit }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Quota',

  props: {
    amount: {
      type: [String, Number],
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },

    bright: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    return {
      displayedAmount: computed(() => !isFinite(Number(props.amount)) ? '-' : Number(props.amount)),
      classes: computed(() => ({
        'quota--bright': props.bright
      }))
    }
  }
}
</script>

<style
  lang="scss"
  src="./Quota.scss"
  scoped
/>
