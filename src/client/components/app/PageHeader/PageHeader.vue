<template>
  <div class="page-header">
    <span class="r-s16-lh19">{{ title }}</span>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'PageHeader',

  setup () {
    const route = useRoute()

    return {
      title: computed(() => route.meta.title)
    }
  }
}
</script>

<style lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 30px 42px;
}
</style>
