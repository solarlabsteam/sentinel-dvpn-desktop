<template>
  <div class="parameter-scale">
    <p class="parameter-scale__title">
      {{ title }}
    </p>

    <div class="parameter-scale__stages">
      <div
        v-for="number in 5"
        :key="number"
        class="parameter-scale__stage"
        :class="{
          'parameter-scale__stage--visible': visibleStages[number],
          [`parameter-scale__stage-${number}`]: true
        }"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ParameterScale',

  props: {
    title: {
      type: String,
      default: '-'
    },

    value: {
      type: Number,
      default: 0
    }
  },

  setup (props) {
    const visibleStages = computed(() => ({
      1: props.value >= 0,
      2: props.value >= 0.2,
      3: props.value >= 0.4,
      4: props.value >= 0.8,
      5: props.value >= 1
    }))

    return { visibleStages }
  }
}
</script>

<style lang="scss" scoped src="./ParameterScale.scss" />
