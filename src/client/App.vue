<template>
  <slr-logo
    v-if="isAppDataLoading"
    class="logo"
  />

  <onboarding v-else-if="!user" />

  <template v-else>
    <connection />
    <div class="page">
      <router-view />
    </div>
  </template>
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import Onboarding from '@/client/pages/Login/Onboarding'
import Connection from '@/client/pages/Connection'

export default {
  name: 'App',

  components: {
    Onboarding,
    Connection
  },

  setup () {
    const store = useStore()
    const user = computed(() => store.getters.user)
    const isUserLoading = computed(() => store.getters.isUserLoading)
    const isDefaultNodeLoading = computed(() => store.getters.isDefaultNodeLoading)
    const isAppDataLoading = computed(() => isUserLoading.value || isDefaultNodeLoading.value)
    const selectedNode = computed(() => store.getters.selectedNode)

    store.dispatch('fetchUser')

    watch(
      () => store.getters.user,
      user => {
        if (user && !selectedNode.value) {
          store.dispatch('selectDefaultNode')
        }
      }
    )

    return { isAppDataLoading, user }
  }
}
</script>

<style lang="scss">
@import "@/client/styles/index.scss";

body {
  margin: 0;
}

#app {
  display: flex;
  overflow: auto;
  height: 100vh;
  background-color: $slr__clr-dark-blue;
  font-family: 'Inter', sans-serif;
  color: $slr__clr-white;
  @include font-template(12px, 15px);
}

.page {
  flex: none;
  overflow-x: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  width: 400px;
  height: 100%;
}

.logo {
  align-self: center;
  margin: auto;
}
</style>
