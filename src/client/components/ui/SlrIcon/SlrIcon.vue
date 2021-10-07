<template>
  <div
    class="slr-icon"
    :class="classes"
    :style="{
      backgroundImage: `url('/assets/icons/${icon}.svg')`,
      width: widthPx,
      height: heightPx
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
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    }
  },

  setup (props) {
    const classes = {
      'slr-icon--rounded': props.rounded
    }

    return {
      classes: computed(() => classes),
      widthPx: computed(() => props.width ? `${props.width}px` : `${props.size}px`),
      heightPx: computed(() => props.height ? `${props.height}px` : `${props.size}px`)
    }
  }
}
</script>

<style lang="scss" scoped>
.slr-icon {
  display: inline-block;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &--rounded {
    border-radius: 50%;
  }
}
</style>
