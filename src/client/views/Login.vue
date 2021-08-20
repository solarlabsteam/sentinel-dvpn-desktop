<template>
  <span v-if="isLoginLoading">Loading...</span>

  <div v-if="!isLogin && !isLoginLoading">
    <button type="button" @click="addAccount">Create a new account</button>
    <button type="button" @click="addAccount({mnemonic: 'join never syrup early any police ready chapter marine play main shine expose tube congress assault crucial senior stove abuse forum dolphin order elder'})">I have a mnemonic</button>
  </div>

  <slot v-if="isLogin"></slot>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions, mapGetters, useStore } from 'vuex'

export default {
  name: 'Login',

  setup () {
    const router = useRouter()
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('fetchUserLogin')
      const isLogin = store.getters.isLogin

      if (isLogin) {
        router.push({ name: 'home' })
      }
    })
  },

  computed: {
    ...mapGetters(['isLogin', 'isLoginLoading'])
  },

  methods: {
    ...mapActions(['addAccount'])
  }
}
</script>

<style
  lang="scss"
>

</style>
