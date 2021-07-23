<template>
  <span v-if="isConnectionLoading">Loading...</span>

  <button @click="disconnect">disconnect</button>

  <node-list v-if="subscriptions.length" :nodes="subscriptions" :fields="['node', 'price', 'deposit']">
    <template #actions="{item}">
      <button @click="connect(item)">connect</button>
    </template>
  </node-list>
</template>

<script>
import NodeList from '@/client/components/NodeList'
import { onMounted, ref } from 'vue'

export default {
  name: 'Subscriptions',
  components: { NodeList },

  setup () {
    const subscriptions = ref([])
    const isConnectionLoading = ref(true)

    const handleSubscriptionList = (nodes) => {
      subscriptions.value = nodes.data
      isConnectionLoading.value = false
    }

    onMounted(() => {
      window.ipc.on('SUBSCRIPTION_LIST', handleSubscriptionList)
      window.ipc.send('SUBSCRIPTION_LIST')
      window.ipc.on('DISCONNECT', (data) => {
        console.log('response', data)
      })
      window.ipc.on('CONNECT_TO_NODE', (data) => {
        console.log(data)
      })
    })

    return {
      subscriptions,
      isConnectionLoading
    }
  },

  methods: {
    connect (subscription) {
      window.ipc.send('CONNECT_TO_NODE', { ...subscription })
    },

    disconnect () {
      window.ipc.send('DISCONNECT')
      // axios.post('/api/v1/disconnect').finally((data) => console.log(data))
    }
  }
}
</script>
