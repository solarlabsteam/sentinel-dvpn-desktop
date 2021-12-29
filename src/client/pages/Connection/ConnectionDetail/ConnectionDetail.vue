<template>
  <div class="connection-detail">
    <slr-icon
      class="connection-detail__icon"
      :size="24"
      :icon="icon"
    />

    <div>
      <p>
        <span class="connection-detail__value">{{ value }}</span>
        <span class="connection-detail__units">{{ units }}</span>
      </p>
      <p class="connection-detail__type">
        {{ type }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import icons from './icons'

export default {
  name: 'ConnectionDetail',

  props: {
    type: {
      type: String,
      required: true
    },

    value: {
      type: String,
      default: '-'
    },

    units: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const icon = computed(() => icons[props.type])

    return { icon }
  }
}
</script>

<style lang="scss" src="./ConnectionDetail.scss" scoped/>
