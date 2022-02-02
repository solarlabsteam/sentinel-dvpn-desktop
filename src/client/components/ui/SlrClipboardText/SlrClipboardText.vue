<template>
  <p class="slr-clipboard-text">
    {{ text }}

    <slr-copy-button
      :value="text"
      :placement="placement"
    />
  </p>
</template>

<script>
export default {
  name: 'SlrClipboardText',
  props: {
    text: {
      type: String,
      default: ''
    },

    placement: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style lang="scss" src="./SlrClipboardText.scss" scoped />
