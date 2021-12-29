<template>
  <div
    class="node-details"
    :class="{
      'node-details--outlined': outlined
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NodeDetails',

  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" src="./NodeDetails.scss" />
