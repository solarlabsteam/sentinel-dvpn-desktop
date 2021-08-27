<template>
<div
  class="slr-icon"
  :class="classes"
  :style="{
    backgroundImage: `url('/assets/icons/${icon}.svg')`,
    width: `${size}px`,
    height: `${size}px`
  }"
/>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SlrIcon',

  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    const classes = {
      'slr-icon--rounded': props.rounded
    }

    return {
      classes: computed(() => classes)
    }
  }
}
</script>

<style lang="scss">
.slr-icon {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &--rounded {
    border-radius: 50%;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    background-size: calc(100% - 12px);
  }
}
</style>
