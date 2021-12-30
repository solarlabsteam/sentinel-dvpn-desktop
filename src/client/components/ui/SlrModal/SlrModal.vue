<template>
  <div
    v-if="open"
    class="slr-modal__mask"
  >
    <div class="slr-modal__wrapper">
      <slr-button
        class="slr-modal__close-button"
        :text="true"
        :tiny="true"
        @click="close"
      >
        &times;
      </slr-button>

      <div class="slr-modal__container">
        <div class="slr-modal__header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="slr-modal__body">
          <slot name="body" />
        </div>

        <div class="slr-modal__footer">
          <slot name="footer">
            <button
              :large="true"
              @click="close"
            >
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SlrModal',

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

<style lang="scss" src="./SlrModal.scss" scoped/>
