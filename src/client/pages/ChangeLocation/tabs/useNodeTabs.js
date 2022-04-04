import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'

export default function useNodeTabs () {
  const emitter = useGlobalEmitter()

  const openNode = async node => {
    emitter.$emit('open-node-drawer', node)
  }

  const filterNodes = (nodes, filterString) => {
    if (!nodes.length) return nodes
    if (!filterString?.length) return nodes

    const str = filterString.toLowerCase()
    return nodes.filter(n => n.moniker.toLowerCase().includes(str) || n.location.country.toLowerCase().includes(str) || n.address.includes(str))
  }

  return {
    openNode,
    filterNodes
  }
}
