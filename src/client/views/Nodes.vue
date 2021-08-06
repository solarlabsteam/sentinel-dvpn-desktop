<template>
  <span v-if="isRequestSent">Loading...</span>

  <node-list v-if="nodeList.length" :nodes="nodeList" :fields="['address']">
    <template #actions="{item}">
      <button @click="subscribe(item)">subscribe</button>
    </template>
  </node-list>
</template>

<script>
import { onMounted, ref } from 'vue'
import NodeList from '@/client/components/NodeList'

export default {
  components: { NodeList },
  setup () {
    const nodeList = ref([])
    const isRequestSent = ref(true)

    const handleNodeList = (nodes) => {
      nodeList.value = nodes.data
      isRequestSent.value = false
    }

    onMounted(() => {
      window.ipc.on('NODE_LIST', handleNodeList)
      window.ipc.send('NODE_LIST')
      window.ipc.on('SUBSCRIBE_TO_NODE', (data) => {
        console.log(data)
        this.isRequestSent.vakue = false
      })
    })

    return {
      nodeList,
      isRequestSent
    }
  },

  methods: {
    subscribe (node) {
      console.log(node)
      window.ipc.send('SUBSCRIBE_TO_NODE', JSON.stringify(node))
      this.isRequestSent = true
    }
  }
}
</script>
