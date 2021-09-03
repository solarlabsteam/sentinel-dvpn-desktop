<template>
  <page-header>
    <slr-button
      :text="true"
      :tiny="true"
      :to="{name: 'settings'}"
    >
      <template #icon>
        <slr-icon
          :size="24"
          :icon="'settings'"
        />
      </template>
    </slr-button>
  </page-header>
  <div>
    <current-plan/>
    <!--favourites-->
  </div>
</template>

<script>

import CurrentPlan from '@/client/views/CurrentPlan'
import PageHeader from '@/client/components/app/PageHeader/PageHeader'

export default {
  name: 'Home',
  components: {
    CurrentPlan,
    PageHeader
  }
}
</script>

<style
  lang="scss"
>

</style>
