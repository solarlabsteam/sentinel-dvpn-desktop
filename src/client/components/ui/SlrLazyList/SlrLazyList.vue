<template>
  <lazy-list-view
    v-if="Array.isArray(items) && items.length > 0"
    v-slot="data"
    v-bind="$attrs"
    :items="items"
  >
    <slot v-bind="data" />
  </lazy-list-view>
</template>

<script>
import LazyListView from '@/client/components/ui/SlrLazyList/LazyListView'

export default {
  name: 'SlrLazyList',

  components: { LazyListView },

  inheritAttrs: false,

  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
