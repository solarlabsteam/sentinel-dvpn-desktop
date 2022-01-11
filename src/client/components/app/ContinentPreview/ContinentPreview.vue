<template>
  <div class="continent-preview">
    <div
      class="continent-preview__map"
      :style="{
        backgroundImage: continentSvg
      }"
    />
    <div class="continent-preview__info">
      <div class="continent-preview__title">
        {{ continent }}
      </div>
      <div class="continent-preview__subtitle">
        {{ t('continent.parameters.availableNode', { count: nodesLength }) }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { paramCase } from 'param-case'

export default {
  name: 'ContinentPreview',

  props: {
    nodesLength: {
      type: Number,
      default: 0
    },

    continent: {
      type: String,
      default: ''
    }
  },

  setup (props) {
    const { t } = useI18n()

    return {
      continentSvg: computed(() => `url(/assets/images/${paramCase(props.continent)}.svg)`),
      t
    }
  }
}
</script>

<style
  lang="scss"
  src="./ContinentPreview.scss"
/>
