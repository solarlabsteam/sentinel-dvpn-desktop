<template>
  <div class="slr-card">
    <p
      v-if="$slots['title'] || title"
      class="slr-card__title"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </p>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'SlrCard',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./SlrCard.scss" scoped/>
