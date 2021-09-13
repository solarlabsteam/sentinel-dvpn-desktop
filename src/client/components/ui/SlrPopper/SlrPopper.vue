<template>
  <popper
    v-bind="$attrs"
    class="slr-popper"
  >
    <template
      v-for="(_, slot) of $slots"
      #[slot]="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
  </popper>
</template>

<script>
import Popper from 'vue3-popper'

export default {
  name: 'SlrPopper',
  components: {
    Popper
  }
}
</script>

<style
  lang="scss"
  src="./SlrPopper.scss"
/>
