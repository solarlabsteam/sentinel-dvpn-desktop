<template>
  <input
    type="text"
    class="slr-input"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="onFocus"
    @blur="onBlur"
  >
</template>

<script>
import useFocus from '@/client/hooks/useFocus'

export default {
  name: 'SlrInput',

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  setup () {
    const { onFocus, onBlur, classes } = useFocus('slr-input')

    return {
      onFocus,
      onBlur,
      classes
    }
  }
}
</script>

<style
  lang="scss"
  src="./SlrInput.scss"
/>
