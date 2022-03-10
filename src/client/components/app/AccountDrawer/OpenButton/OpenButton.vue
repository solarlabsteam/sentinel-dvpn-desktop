<template>
  <slr-button
    :text="true"
    :tiny="true"
    @click="openAccountDrawer"
  >
    <template #icon>
      <slr-icon
        :size="32"
        :icon="'account'"
      />
    </template>
  </slr-button>
</template>

<script>
import useAccount from '@/client/hooks/useAccount'

export default {
  name: 'OpenButton',

  setup () {
    const { openAccountDrawer } = useAccount()

    return { openAccountDrawer }
  }
}
</script>
