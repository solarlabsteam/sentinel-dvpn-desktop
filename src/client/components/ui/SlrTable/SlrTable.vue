<template>
  <div
    class="slr-table"
    :class="{
      'slr-table--outlined': outlined
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NodeDetailsTable',

  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" src="./SlrTable.scss" />
