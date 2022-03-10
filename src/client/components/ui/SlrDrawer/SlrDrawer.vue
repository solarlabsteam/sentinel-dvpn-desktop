<template>
  <transition name="slide-left">
    <div
      v-if="open"
      class="slr-drawer"
    >
      <div class="slr-drawer__header">
        <slot name="header">
          <slr-drawer-close-button @close="close" />
        </slot>
      </div>

      <div class="slr-drawer__body">
        <slot name="body" />
      </div>
    </div>
  </transition>
</template>

<script>
import SlrDrawerCloseButton from './CloseButton'

export default {
  name: 'SlrDrawer',

  components: {
    SlrDrawerCloseButton
  },

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
