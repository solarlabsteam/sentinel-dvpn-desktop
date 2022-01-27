<template>
  <div
    class="plan-parameter"
    :class="{
      'slr-hoverable': to
    }"
    @click="() => to && $router.push(to)"
  >
    <div class="plan-parameter__header">
      <div
        class="plan-parameter__image"
        :class="{
          'fp fp-lg': !!countryIso,
          [countryIso]: !!countryIso,
          'slr-currency': !!currencyIcon,
          [currencyIcon]: !!currencyIcon
        }"
      />

      <span class="plan-parameter__parameter">{{ parameter }}</span>
    </div>

    <div class="plan-parameter__footer">
      <span>
        <span class="plan-parameter__title">{{ title }}</span>
        <span class="plan-parameter__second-title">{{ secondTitle }}</span>
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
import denomNames from '@/client/constants/denomNames'

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
      countryIso: computed(() => props.country ? lookupCountry.byCountry(props.country)?.iso2.toLowerCase() : ''),
      currencyIcon: computed(() => denomNames[props.currency]?.icon)
    }
  }
}
</script>

<style
  lang="scss"
  src="./PlanParameter.scss"
  scoped
/>
