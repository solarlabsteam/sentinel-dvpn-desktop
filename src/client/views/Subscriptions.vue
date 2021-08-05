<template>
  <span v-if="isConnectionLoading">Loading...</span>

  <button @click="disconnect">disconnect</button>

  <node-list v-if="subscriptions?.subscriptionsList?.length" :nodes="subscriptions.subscriptionsList" :fields="['node']">
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
    const subscriptions = ref({})
    const isConnectionLoading = ref(true)

    const handleSubscriptionList = (result) => {
      subscriptions.value = result.data
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
      window.ipc.send('CONNECT_TO_NODE', JSON.stringify(subscription))
    },

    disconnect () {
      window.ipc.send('DISCONNECT')
    }
  }
}
</script>
