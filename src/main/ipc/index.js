import { initStoreHandlers } from '@/main/store/store'
import initAccountListeners from '@/main/ipc/listeners/account'
import initConnectionListeners from '@/main/ipc/listeners/connection'
import initSubscriptionListeners from '@/main/ipc/listeners/subscription'
import initQuotaListeners from '@/main/ipc/listeners/quota'
import initNodeListeners from '@/main/ipc/listeners/node'
import initNodesListeners from '@/main/ipc/listeners/nodes'
import initShellListeners from '@/main/ipc/listeners/shell'

initStoreHandlers()
initAccountListeners()
initConnectionListeners()
initSubscriptionListeners()
initQuotaListeners()
initNodeListeners()
initNodesListeners()
initShellListeners()
