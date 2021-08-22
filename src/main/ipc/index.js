import { initStoreHandlers } from '@/main/store/store'
import initAccountListeners from '@/main/ipc/channelListeners/account'
import initConnectionListeners from '@/main/ipc/channelListeners/connection'
import initSubscriptionListeners from '@/main/ipc/channelListeners/subscription'
import initQuotaListeners from '@/main/ipc/channelListeners/quota'
import initNodeListeners from '@/main/ipc/channelListeners/node'

initStoreHandlers()
initAccountListeners()
initConnectionListeners()
initSubscriptionListeners()
initQuotaListeners()
initNodeListeners()
