<template>
  <div class="page-header">
    <slr-button
      v-if="hasStepBackButton"
      :text="true"
      :tiny="true"
      @click="() => $router.back()"
    >
      <template #icon>
        <slr-icon
          :width="18"
          :height="16"
          :icon="'arrow-left'"
        />
      </template>
    </slr-button>
    <span class="r-s16-lh19">{{ title }}</span>

    <div/>
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
      title: computed(() => route.meta.title),
      hasStepBackButton: computed(() => route.meta.hasStepBackButton)
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
