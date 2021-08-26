<template>
  <button class="slr-button" @click="onClick" :class="classes">
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
      'slr-button--block': props.block
    }

    return {
      onClick,
      classes
    }
  }
}
</script>

<style lang="scss" src="./SlrButton.scss" />
