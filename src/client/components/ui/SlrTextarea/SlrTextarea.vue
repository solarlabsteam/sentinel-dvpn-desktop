<template>
  <div
    class="slr-textarea"
    :class="classes"
  >
    <span
      v-if="label"
      class="slr-textarea__label"
    >{{ label }}</span>

    <textarea
      class="slr-textarea__input"
      :rows="6"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import useFocus from '@/client/hooks/useFocus'

export default {
  name: 'SlrTextarea',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: ''
    },

    modelValue: {
      type: String,
      default: ''
    },

    wrapperClassName: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  setup (props) {
    const { onFocus, onBlur, classes: focusClasses } = useFocus('slr-textarea')
    const classes = computed(() => ({
      ...focusClasses.value,
      [props.wrapperClassName]: true
    }))

    return {
      onFocus,
      onBlur,
      classes
    }
  }

}
</script>

<style lang="scss" src="./SlrTextarea.scss" scoped />
