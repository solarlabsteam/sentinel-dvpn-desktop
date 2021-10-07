<template>
  <div class="slr-progress">
    <div
      class="slr-progress__passed"
      :class="`slr-progress__passed--${color}`"
      :style="{
        width: passedWidth
      }"
    />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SlrProgress',

  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'blue'
    }
  },

  setup (props) {
    return {
      passedWidth: computed(() => {
        const to = Number(props.to.toFixed(2))
        const from = Number(props.from.toFixed(2))
        const passed = parseInt(((from / to) * 100).toString())

        if (isNaN(passed) || !isFinite(passed)) {
          return 0
        }

        return passed + '%'
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./SlrProgress.scss"
  scoped
/>
