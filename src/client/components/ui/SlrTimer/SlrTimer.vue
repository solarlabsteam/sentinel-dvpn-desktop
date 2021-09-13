<template>
  <span>{{ timeLeft }}</span>
</template>

<script>
import Timer from 'tiny-timer'
import { ref, computed, onBeforeUnmount } from 'vue'
import format from 'date-fns/format'
import getUnixTime from 'date-fns/getUnixTime'

export default {
  name: 'SlrTimer',

  props: {
    time: {
      type: Number,
      default: 0
    }
  },

  emits: ['done', 'tick'],

  setup (props, { emit }) {
    const timer = new Timer()
    const startTime = props.time - getUnixTime(new Date()) * 1000
    const timeLeft = ref(0)

    timer.on('tick', ms => {
      emit('tick', ms)
      timeLeft.value = ms
    })
    timer.on('done', () => {
      emit('done')
    })
    timer.start(startTime)

    onBeforeUnmount(() => {
      timer.stop()
    })

    return {
      timeLeft: computed(() => format(timeLeft.value, 'mm:ss'))
    }
  }
}
</script>
