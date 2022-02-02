<template>
  <div class="node-detail">
    <slr-icon
      v-if="!isFeaturesDetail"
      class="node-detail__icon"
      :size="24"
      :icon="icon"
    />
    <slr-icon
      v-else
      class="node-detail__icon"
      :width="56"
      :height="26"
      :icon="icon"
    />

    <p
      v-if="!isFeaturesDetail"
      class="node-detail__type"
    >
      {{ t(`node.parameters.${type}`) }}
    </p>
    <p class="node-detail__value">
      {{ value }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import icons from './icons'

export default {
  name: 'NodeDetail',

  props: {
    type: {
      type: String,
      required: true
    },

    value: {
      type: [String, Number],
      default: ''
    }
  },

  setup (props) {
    const icon = computed(() => icons[props.type])
    const isFeaturesDetail = computed(() => props.type === 'features')
    const { t } = useI18n()

    return { icon, t, isFeaturesDetail }
  }
}
</script>

<style lang="scss" src="./NodeDetail.scss"/>
