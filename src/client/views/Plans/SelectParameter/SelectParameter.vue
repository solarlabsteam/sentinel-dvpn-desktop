<template>
  <div
    class="select-parameter slr-card"
    :class="{
      'u-pointer': to
    }"
    @click="() => to && $router.push(to)"
  >
    <div class="select-parameter__header">
      <div
        class="select-parameter__image"
        :class="{
          'fp fp-lg': !!countryIso,
          [countryIso]: !!countryIso,
          'slr-currency': !!currency,
          [currency]: !!currency
        }"
      />

      <span class="select-parameter__parameter">{{ parameter }}</span>
    </div>

    <div class="select-parameter__footer">
      <span>
        <span class="select-parameter__title">{{ title }}</span>
        <span class="select-parameter__second-title">{{ secondTitle }}</span>
      </span>

      <slr-icon
        v-if="to"
        :icon="'chevron-bottom'"
        :size="14"
        :rounded="true"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import lookupCountry from 'country-code-lookup'

export default {
  name: 'ChangeParameter',

  props: {
    title: {
      type: String,
      default: ''
    },
    secondTitle: {
      type: String,
      default: ''
    },
    parameter: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: null
    },
    country: {
      type: String,
      default: ''
    },
    currency: {
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
  src="./SelectParameter.scss"
/>
