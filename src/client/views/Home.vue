<template>
  <div>
    <current-plan/>
    <available-subscriptions />
  </div>
</template>

<script>

import CurrentPlan from '@/client/views/CurrentPlan'
import AvailableSubscriptions from '@/client/views/AvailableSubscriptions'

export default {
  name: 'Home',
  components: {
    CurrentPlan,
    AvailableSubscriptions
  }
}
</script>

<style
  lang="scss"
>

</style>
