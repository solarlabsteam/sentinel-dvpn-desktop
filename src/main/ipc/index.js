import { initStoreHandlers } from '@/main/store/store'
import initAccountListeners from '@/main/ipc/listeners/account'
import initConnectionListeners from '@/main/ipc/listeners/connection'
import initSubscriptionListeners from '@/main/ipc/listeners/subscription'
import initQuotaListeners from '@/main/ipc/listeners/quota'
import initNodeListeners from '@/main/ipc/listeners/node'

initStoreHandlers()
initAccountListeners()
initConnectionListeners()
initSubscriptionListeners()
initQuotaListeners()
initNodeListeners()
