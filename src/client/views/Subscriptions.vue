<template>
  <span v-if="isSubscriptionsLoading || isRequestSent">Loading...</span>

  <button @click="disconnect">disconnect</button>

  <node-list v-if="subscriptions.length" :nodes="subscriptions" :fields="['node']">
    <template #actions="{item}">
      <button @click="connect(item)">connect</button>
    </template>
  </node-list>
</template>

<script>
import NodeList from '@/client/components/NodeList'
import { onMounted, ref } from 'vue'
import { useStore, mapGetters } from 'vuex'

export default {
  name: 'Subscriptions',
  components: { NodeList },

  setup () {
    const isRequestSent = ref(false)
    const store = useStore()

    const handleConnectEvent = (data) => {
      console.log(data)
      isRequestSent.value = false
    }

    onMounted(() => {
      store.dispatch('fetchSubscriptions')
      window.ipc.on('DISCONNECT', (data) => {
        console.log('response', data)
      })
      window.ipc.on('CONNECT_TO_NODE', handleConnectEvent)
    })

    return {
      isRequestSent
    }
  },

  methods: {
    connect (subscription) {
      window.ipc.send('CONNECT_TO_NODE', JSON.stringify(subscription))
      this.isRequestSent = true
    },

    disconnect () {
      window.ipc.send('DISCONNECT')
    }
  },

  computed: {
    ...mapGetters(['subscriptions', 'isSubscriptionsLoading'])
  }
}
</script>
