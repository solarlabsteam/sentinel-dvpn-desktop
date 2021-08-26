<template>
  <div class="node-preview">
    <div
      class="node-preview__flag fp fp-lg"
      :class="{
        [countryIso]: true
      }"
      :style="{
        width: `${size}px`,
        height: `${size}px`
      }"
    />
    <div class="node-preview__info">
      <div class="node-preview__title">
        <span class="mr-3">{{ title }}</span>
        <span class="node-preview__number">{{ number }}</span>
      </div>
      <div v-if="subtitle" class="node-preview__subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import lookupCountry from 'country-code-lookup'

export default {
  name: 'NodePreview',

  props: {
    title: {
      type: String,
      default: ''
    },
    number: {
      type: [String, Number],
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 25
    }
  },

  setup (props) {
    return {
      countryIso: computed(() => props.country ? lookupCountry.byCountry(props.country)?.iso2.toLowerCase() : '')
    }
  }
}
</script>

<style
  lang="scss"
  src="./NodePreview.scss"
/>
