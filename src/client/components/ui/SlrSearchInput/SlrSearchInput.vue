<template>
  <slr-input
    :model-value="modelValue"
    @update:modelValue="onInput"
  />
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'SlrSearchInput',

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue', 'search'],

  setup (props, { emit }) {
    const onInput = debounce((str) => emit('update:modelValue', str), 300)

    return { onInput }
  }
}
</script>
