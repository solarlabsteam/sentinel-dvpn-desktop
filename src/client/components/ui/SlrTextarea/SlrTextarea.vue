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
import { reactive, toRefs } from 'vue'

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
    const state = reactive({
      classes: {
        'slr-textarea--focused': false,
        [props.wrapperClassName]: true
      }
    })
    const onFocus = () => {
      state.classes['slr-textarea--focused'] = true
    }
    const onBlur = () => {
      state.classes['slr-textarea--focused'] = false
    }

    return {
      onFocus,
      onBlur,
      ...toRefs(state)
    }
  }

}
</script>

<style lang="scss" src="./SlrTextarea.scss" scoped />
