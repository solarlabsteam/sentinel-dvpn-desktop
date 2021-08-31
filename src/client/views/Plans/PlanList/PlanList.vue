<template>
<ul class="plans-list">
  <slot></slot>
</ul>
</template>

<script>
export default {
  name: 'PlansList'
}
</script>

<style lang="scss">
.plans-list {
  padding: 0 30px;
}
</style>
