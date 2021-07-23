<template>
  <span v-if="isConnectionLoading">Loading...</span>

  <node-list v-if="nodeList.length" :nodes="nodeList" :fields="['country', 'address', 'price']">
    <template #actions>
      <button @click="subscribe(node)">subscribe</button>
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
    const isConnectionLoading = ref(true)

    const handleNodeList = (nodes) => {
      nodeList.value = nodes.data
      isConnectionLoading.value = false
    }

    onMounted(() => {
      window.ipc.on('NODE_LIST', handleNodeList)
      window.ipc.send('NODE_LIST')
    })

    return {
      nodeList,
      isConnectionLoading
    }
  },

  methods: {
    subscribe (node) {
      this.isConnectionLoading = true
    }
  }
}
</script>
