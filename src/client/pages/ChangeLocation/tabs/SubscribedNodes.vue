<template>
  <template v-if="nodes.length">
    <slr-search-input
      v-model="searchString"
      :placeholder="t('route.changeLocation.search.placeholder')"
      class="my-4"
    />

    <ul>
      <li
        v-for="(node, idx) in filteredNodes"
        :key="node.address"
        class="change-location__list-item"
        :class="{'pt-2': idx === 0}"
        @click="() => openNode(node)"
      >
        <node-details :node="node" />
      </li>
    </ul>
  </template>

  <p
    v-else
    class="m-s12-lh15 opacity-4 text-center mt-5"
  >
    {{ t('subscription.list.noData') }}
  </p>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import useNodeTabs from '@/client/pages/ChangeLocation/tabs/useNodeTabs'
import NodeDetails from '@/client/components/app/NodeDetails'

export default {
  name: 'SubscribedNodes',

  components: {
    NodeDetails
  },

  setup () {
    const store = useStore()
    const { t } = useI18n()
    const { openNode, filterNodes } = useNodeTabs()
    const searchString = ref('')
    const nodes = computed(() => store.getters.subscribedNodes)
    const filteredNodes = computed(() => filterNodes(nodes.value, searchString.value))

    return { t, searchString, filteredNodes, openNode, nodes }
  }
}
</script>
