<template>
  <transition name="slide-left">
    <div
      v-if="open"
      class="slr-drawer"
    >
      <div class="slr-drawer__header">
        <slr-button
          class="slr-drawer__close-button"
          :text="true"
          :tiny="true"
          @click="close"
        >
          &times;
        </slr-button>
      </div>

      <div class="slr-drawer__body">
        <slot name="body" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SlrDrawer',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close'],

  setup (props, { emit }) {
    const close = () => {
      emit('close')
    }

    return { close }
  }
}
</script>

<style lang="scss" src="./SlrDrawer.scss" scoped />
