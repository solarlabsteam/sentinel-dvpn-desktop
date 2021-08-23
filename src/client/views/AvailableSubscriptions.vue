<template>
  <div>
    <span>My subscriptions</span>
    <span v-if="isSubscriptionsLoading">Loading...</span>

    <node-list :nodes="subscriptions" :fields="['node']"></node-list>
  </div>
</template>

<script>
import { mapGetters, useStore } from 'vuex'
import NodeList from '@/client/components/app/NodeList'
import { onMounted } from 'vue'

export default {
  name: 'AvailableSubscriptions',

  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchSubscriptions')
    })
  },

  components: {
    NodeList
  },

  computed: {
    ...mapGetters(['subscriptions', 'isSubscriptionsLoading'])
  }
}
</script>

<style
  lang="scss"
>

</style>
