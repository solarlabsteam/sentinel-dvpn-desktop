import { OPEN_EXTERNAL_LINK } from '@/shared/channel-types'

export default function useShell () {
  const openUrl = url => window.ipc.send(OPEN_EXTERNAL_LINK, url)

  return { openUrl }
}
