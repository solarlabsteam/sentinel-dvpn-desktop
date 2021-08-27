<template>
  <button class="slr-button" @click="onClick" :class="classes">
    <slot v-if="$slots['icon']" name="icon"></slot>
    <slot></slot>
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
    }
  },

  setup (props) {
    const router = useRouter()

    const onClick = () => {
      if (props.to) {
        router.push(props.to)
      }
    }

    const classes = {
      'slr-button--block': props.block,
      'slr-button--text': props.text,
      'slr-button--tiny': props.tiny
    }

    return {
      onClick,
      classes
    }
  }
}
</script>

<style lang="scss" src="./SlrButton.scss" />
