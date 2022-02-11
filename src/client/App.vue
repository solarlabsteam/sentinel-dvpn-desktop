<template>
  <router-view v-if="!user" />

  <slr-logo
    v-else-if="isDefaultNodeLoading"
    class="logo"
  />

  <template v-else>
    <connection />
    <div class="page">
      <router-view />
      <account-drawer />
    </div>
  </template>
</template>

<script>
import { computed, watch, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import Connection from '@/client/pages/Connection'
import AccountDrawer from '@/client/components/app/AccountDrawer'

export default {
  name: 'App',

  components: {
    Connection,
    AccountDrawer
  },

  setup () {
    const store = useStore()
    const user = computed(() => store.getters.user)
    const isDefaultNodeLoading = computed(() => store.getters.isDefaultNodeLoading)
    const selectedNode = computed(() => store.getters.selectedNode)

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    watch(
      () => store.getters.user,
      user => {
        if (user && !selectedNode.value) {
          store.dispatch('selectDefaultNode')
        }
      }
    )

    return { user, isDefaultNodeLoading }
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
  overflow-x: auto;
  overflow-y: hidden;
  height: 100vh;
  background-color: $slr__clr-dark-blue;
  font-family: 'Poppins', sans-serif;
  color: $slr__clr-white-1;
  @include font-template(14px, 17px);
}

.page {
  flex: none;
  overflow-x: auto;
  box-sizing: border-box;
  width: 30%;
  min-width: 400px;
  height: 100%;
  padding: 20px 24px 20px 16px;
}

</style>
