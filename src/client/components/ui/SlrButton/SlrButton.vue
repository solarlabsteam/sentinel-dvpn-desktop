<template>
  <button
    class="slr-button slr-hoverable"
    :class="classes"
    @click="onClick"
  >
    <slot
      v-if="$slots['icon']"
      name="icon"
    />
    <slot />
  </button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'SlrButton',

  props: {
    to: {
      type: Object,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup (props, { emit }) {
    const router = useRouter()

    const onClick = (e) => {
      if (props.disabled) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return
      }

      emit('click', e)

      if (props.to) {
        router.push(props.to)
      }
    }

    const classes = {
      'slr-button--block': props.block,
      'slr-button--text': props.text,
      'slr-button--tiny': props.tiny,
      'slr-button--rounded': props.rounded,
      'slr-button--large': props.rounded
    }

    return {
      onClick,
      classes
    }
  }
}
</script>

<style lang="scss" src="./SlrButton.scss" scoped/>
