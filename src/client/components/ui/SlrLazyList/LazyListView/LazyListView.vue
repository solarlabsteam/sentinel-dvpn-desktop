<template>
  <component :is="tag">
    <template
      v-for="(item, idx) in itemsToRender"
      :key="item[keyField]"
    >
      <slot
        :item="item"
        :idx="idx"
      />
    </template>
  </component>
</template>

<script>
import { onBeforeMount, ref, watch } from 'vue'

export default {
  name: 'LazyListView',

  props: {
    items: {
      type: Array,
      default: () => ([])
    },

    keyField: {
      type: String,
      default: ''
    },

    tag: {
      type: String,
      default: 'ul'
    }
  },

  setup (props) {
    const itemsToRender = ref([])
    const itemsPerTik = 50
    let countOfRenderedItems = 0
    let timer = null

    onBeforeMount(() => renderList(true))

    watch(
      () => props.items,
      () => renderList(true)
    )

    const reset = () => {
      itemsToRender.value = []
      countOfRenderedItems = 0
    }

    const renderList = async (isReset) => {
      if (isReset) {
        reset()
        clearTimeout(timer)
      }

      const itemsToNextRender = props.items.slice(countOfRenderedItems, countOfRenderedItems + itemsPerTik)
      itemsToRender.value.push(...itemsToNextRender)
      timer = setTimeout(() => {
        countOfRenderedItems += itemsToNextRender.length

        if (countOfRenderedItems !== props.items.length) {
          return renderList()
        }
      })
    }

    return { itemsToRender }
  }
}
</script>
