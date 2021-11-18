<template>
  <div
    v-show="isActive"
    class="slr-tab"
  >
    <slot />
  </div>
</template>

<script>
import { onBeforeMount, ref, inject, watch } from 'vue'

export default {
  name: 'SlrTab',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  setup () {
    const index = ref(0)
    const isActive = ref(false)

    const tabs = inject('TabsProvider')

    watch(
      () => tabs.selectedIndex,
      () => {
        isActive.value = index.value === tabs.selectedIndex
      }
    )

    onBeforeMount(() => {
      index.value = tabs.count
      tabs.count++
      isActive.value = index.value === tabs.selectedIndex
    })
    return { index, isActive }
  }
}
</script>
