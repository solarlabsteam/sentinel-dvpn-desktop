<template>
  <div>
    <div>
      <button @click="() => $router.back()">Back</button>
    </div>
    <span v-if="isRequestSent">Loading...</span>

    <node-list v-if="nodeList.length" :nodes="nodeList" :fields="['address']">
      <template #actions="{item}">
        <button @click="select(item)">select</button>
      </template>
    </node-list>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { mapActions } from 'vuex'
import NodeList from '@/client/components/NodeList'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

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
    async select (node) {
      await this.clearPreviousNodeState()
      await this.selectNode(node)
      await syncStoreValue('selectedNode', node)
      this.$router.back()
    },

    async clearPreviousNodeState () {
      await this.clearSelectedNode()
      await this.clearSubscriptionForNode()
      await this.clearQuota()
    },

    ...mapActions(['selectNode', 'clearSubscriptionForNode', 'clearQuota', 'clearSelectedNode'])
  }
}
</script>
