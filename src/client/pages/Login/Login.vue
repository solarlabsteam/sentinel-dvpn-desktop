<template>
  <slr-logo
    v-if="isUserLoading"
    class="logo"
  />

  <component
    :is="currentView"
    v-show="!isUserLoading"
    class="login"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LoginImport from '@/client/pages/Login/LoginImport'
import LoginCreate from '@/client/pages/Login/LoginCreate'

export default {
  name: 'Login',

  components: {
    LoginImport,
    LoginCreate
  },

  props: {
    isImport: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    const store = useStore()
    const currentView = computed(() => props.isImport ? 'LoginImport' : 'LoginCreate')
    const isUserLoading = computed(() => store.getters.isUserLoading)

    return { currentView, isUserLoading }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: auto;
  box-sizing: border-box;
  width: 500px;
  min-width: 400px;
  padding: 0 40px;
}

.logo {
  align-self: center;
  margin: auto;
}
</style>
