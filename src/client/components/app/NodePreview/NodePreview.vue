<template>
  <div class="node-preview">
    <div
      class="node-preview__flag fp fp-lg"
      :class="{
        [countryIso]: true
      }"
    />
    <div class="node-preview__info">
      <div class="node-preview__title">
        {{ title }}
      </div>
      <div class="node-preview__subtitle">
        {{ subtitle }}
      </div>
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
    subtitle: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
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
  scoped
/>
