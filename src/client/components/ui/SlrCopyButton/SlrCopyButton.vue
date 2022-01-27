<template>
  <slr-popper
    :content="t('action.copied')"
    :show="isPopperShown"
    :offset-distance="'6'"
    :placement="placement"
  >
    <slr-button
      v-clipboard:copy="value"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      :text="true"
      :tiny="true"
    >
      <template #icon>
        <slr-icon
          :width="13"
          :height="15"
          :icon="'copy'"
        />
      </template>
    </slr-button>
  </slr-popper>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, ref } from 'vue'

export default {
  name: 'SlrCopyButton',

  props: {
    value: {
      type: [String, Number],
      required: true
    },

    placement: {
      type: String,
      default: 'right'
    }
  },

  setup () {
    const { t } = useI18n()
    const isPopperShown = ref(false)
    let timer

    const onCopy = () => {
      isPopperShown.value = true

      clearTimeout(timer)
      timer = setTimeout(() => {
        isPopperShown.value = false
      }, 2000)
    }

    const onError = e => {
      console.error(e)
    }

    onBeforeUnmount(() => {
      clearTimeout(timer)
    })

    return { t, isPopperShown, onCopy, onError }
  }
}
</script>

<style
  lang="scss"
  scoped
/>
