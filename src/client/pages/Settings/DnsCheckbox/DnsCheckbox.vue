<template>
<div
  class="dns-checkbox"
  :class="{'dns-checkbox--active': active}"
  @click="$emit('select', option)"
>
  <div class="dns-checkbox__name">
    <slr-icon
      class="mr-3"
      :size="25"
      :icon="icon"
    />

    <span class="m-s12-lh15">{{ option.name }}</span>
  </div>

  <div
    class="dns-checkbox__button"
    :class="{'dns-checkbox__button--active': active}"
  />
</div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'DnsCheckbox',

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

  emits: ['select'],

  setup (props) {
    return {
      icon: computed(() => props.option.name.toLowerCase())
    }
  }
}
</script>

<style
  lang="scss"
  src="./DnsCheckbox.scss"
/>
