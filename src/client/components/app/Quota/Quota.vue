<template>
  <div
    class="quota slr-card"
    :class="{
      'slr-hoverable': to
    }"
    @click="() => to && $router.push(to)"
  >
    <div class="quota__header">
      <div class="quota__count">
        <span>{{ displayedCount }}</span>
        <span class="quota__units">{{ units }}</span>
      </div>

      <slr-icon
        v-if="to"
        :icon="'arrow-top-right'"
        :size="14"
        :rounded="true"
      />
    </div>
    <div class="quota__description">
      {{ description }}
    </div>

    <slr-progress
      :from="Number(total) - Number(count)"
      :to="Number(total)"
      :color="progressColor"
    />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Quota',

  props: {
    count: {
      type: [String, Number],
      default: 0
    },
    units: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0
    },
    progressColor: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: null
    },
    total: {
      type: [Number, String],
      default: 0
    }
  },

  setup (props) {
    return {
      displayedCount: computed(() => !isFinite(Number(props.count)) ? '∞' : Number(props.count))
    }
  }
}
</script>

<style
  lang="scss"
  src="./Quota.scss"
  scoped
/>
