<template>
  <slr-button
    class="slr-drawer__close-button"
    :text="true"
    :tiny="true"
    @click="close"
  >
    &times;
  </slr-button>
</template>

<script>
export default {
  name: 'CloseButton',

  emits: ['close'],

  setup (props, { emit }) {
    const close = () => {
      emit('close')
    }

    return { close }
  }
}
</script>

<style
  lang="scss"
  src="./CloseButton.scss"
  scoped
/>
