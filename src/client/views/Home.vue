<template>
  <page-header />
  <div>
    <current-plan/>
<!--    <available-subscriptions />-->
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
