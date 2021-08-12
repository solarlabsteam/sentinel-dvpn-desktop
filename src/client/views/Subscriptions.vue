<template>
  <span v-if="isSubscriptionsLoading || isRequestSent">Loading...</span>

  <button @click="disconnect">disconnect</button>

  <node-list v-if="subscriptions.length" :nodes="subscriptions" :fields="['node']">
    <template #actions="{item}">
      <button @click="connect(item)">connect</button>
      <button @click="checkQuota(item)">Check a quota</button>
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
      window.ipc.on('DISCONNECT', (data) => {
        console.log('response', data)
      })
      window.ipc.on('QUOTA', (data) => {
        console.log('response', data)
      })
      window.ipc.on('CONNECT_TO_NODE', handleConnectEvent)
      store.dispatch('fetchSubscriptions').catch(e => console.error(e))
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
    },

    checkQuota (subscription) {
      window.ipc.send('QUOTA', JSON.stringify(subscription))
    }
  },

  computed: {
    ...mapGetters(['subscriptions', 'isSubscriptionsLoading'])
  }
}
</script>
