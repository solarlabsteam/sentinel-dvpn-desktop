<template>
<div
  class="slr-loader"
  :style="{width: `${size}px`, height: `${size}px`}"
>
  <div class="slr-loader__lines" :style="{ width: linesSize, height: linesSize, borderWidth : linesBorder }"></div>
</div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SlrLoader',

  props: {
    size: {
      type: Number,
      default: 40
    }
  },

  setup (props) {
    return {
      linesSize: computed(() => (props.size / 1.25).toFixed(2) + 'px'),
      linesBorder: computed(() => Math.floor(props.size / 10) + 'px')
    }
  }
}
</script>

<style lang="scss" src="./SlrLoader.scss" />
