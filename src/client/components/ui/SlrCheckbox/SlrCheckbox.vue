<template>
  <div
    class="slr-checkbox"
    :class="{'slr-checkbox--active': active}"
    @click="$emit('select', option)"
  >
    <div class="slr-checkbox__name">
      <slot :option="option">
        {{ option.name }}
      </slot>
    </div>

    <div
      class="slr-checkbox__button"
      :class="{'slr-checkbox__button--active': active}"
    />
  </div>
</template>

<script>
export default {
  name: 'SlrCheckbox',

  props: {
    option: {
      type: Object,
      required: true
    },

    active: {
      type: Boolean,
      required: true
    }
  },

  emits: ['select']
}
</script>

<style
  lang="scss"
  src="./SlrCheckbox.scss"
  scoped
/>
