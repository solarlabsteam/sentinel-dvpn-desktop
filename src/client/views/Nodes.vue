<template>
  <span v-if="isRequestSent">Loading...</span>

  <node-list v-if="nodeList.length" :nodes="nodeList" :fields="['address']">
    <template #actions="{item}">
      <button @click="select(item)">select</button>
    </template>
  </node-list>
</template>

<script>
import { onMounted, ref } from 'vue'
import { mapActions } from 'vuex'
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
    })

    return {
      nodeList,
      isRequestSent
    }
  },

  methods: {
    select (node) {
      this.selectNode(node)
      this.$router.push({ name: 'home' })
    },

    ...mapActions(['selectNode'])
  }
}
</script>
