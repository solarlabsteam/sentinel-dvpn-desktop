import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default function useNodeTabs () {
  const router = useRouter()
  const store = useStore()

  const openNode = async node => {
    await store.dispatch('setDetailedNode', node)
    router.push({ name: 'node' })
  }

  const filterNodes = (nodes, filterString) => {
    if (!nodes.length) return nodes
    if (!filterString?.length) return nodes

    const str = filterString.toLowerCase()
    return nodes.filter(n => n.moniker.toLowerCase().includes(str) || n.location.country.toLowerCase().includes(str))
  }

  return {
    openNode,
    filterNodes
  }
}
