import useGlobalEmitter from '@/client/hooks/useGlobalEmitter'

export default function useAccount () {
  const emitter = useGlobalEmitter()
  const openAccountDrawer = () => {
    emitter.$emit('open-account-drawer')
  }

  return { openAccountDrawer }
}
