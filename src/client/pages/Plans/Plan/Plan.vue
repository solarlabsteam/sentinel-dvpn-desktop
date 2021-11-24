<template>
  <li class="plan">
    <div
      class="plan__feature"
      :class="{[`plan__feature--${plan.feature}`]: !!plan.feature}"
    >
      {{ plan.feature }}
    </div>

    <div class="plan__description">
      <div class="plan__tariff">
        <span class="plan__type">{{ t('plan.type.unlimited.title') }}</span>

        <div class="plan__size">
          <span class="plan__amount-gb">{{ plan.amountGbs }}</span>
          <span class="plan__unit">{{ t('plan.unit.gb.title') }}</span>
        </div>
      </div>

      <div class="plan__price">
        <div class="plan__denom">
          {{ denomNames[selectedNode.priceList[0].denom]?.name }}
        </div>
        <div class="plan__amount-coin">
          {{ coinsAmount }}
        </div>
      </div>

      <slr-button
        class="plan__button-buy"
        @click="$emit('buy', plan.amountGbs)"
      >
        {{ t('plan.action.buy') }}
      </slr-button>
    </div>
  </li>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import denomNames from '@/client/constants/denomNames'

export default {
  name: 'Plan',

  props: {
    plan: {
      type: Object,
      required: true
    }
  },

  emits: ['buy'],

  setup (props) {
    const store = useStore()
    const { t } = useI18n()
    const selectedNode = computed(() => store.getters.selectedNode)
    const coinsAmount = computed(() => (selectedNode.value.priceList[0].amount * props.plan.amountGbs / denomNames[selectedNode.value.priceList[0].denom].perUnit).toLocaleString('en'))

    return {
      selectedNode,
      coinsAmount,
      t,
      denomNames
    }
  }
}
</script>

<style
  lang="scss"
  src="./Plan.scss"
  scoped
/>
