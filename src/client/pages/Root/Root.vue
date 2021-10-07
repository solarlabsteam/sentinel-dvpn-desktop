<template>
  <slr-logo
    v-if="isUserLoading"
    class="logo"
  />

  <template v-else>
    <onboarding v-if="!user" />
    <slot v-else />
  </template>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Onboarding from '@/client/pages/Root/Onboarding'

export default {
  name: 'Root',

  components: {
    Onboarding
  },

  setup () {
    const router = useRouter()
    const store = useStore()
    const isUserLoading = computed(() => store.getters.isUserLoading)
    const user = computed(() => store.getters.user)

    onMounted(async () => {
      await store.dispatch('fetchUser')

      if (user.value) {
        router.push({ name: 'home' })
      }
    })

    return { isUserLoading, user }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  align-self: center;
  margin: auto;
}
</style>
