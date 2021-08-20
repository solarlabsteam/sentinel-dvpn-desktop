import { initStoreHandlers } from '@/main/store/store'
import initChannelListeners from '@/main/ipc/channelListeners'

initStoreHandlers()
initChannelListeners()
