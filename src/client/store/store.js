import { createStore, createLogger } from 'vuex'
import { prefetchStore } from '@/client/store/plugins/syncElectronStore'
import subscription from '@/client/store/modules/subscription'
import node from '@/client/store/modules/node'
import connection from '@/client/store/modules/connection'
import quota from '@/client/store/modules/quota'
import nodes from '@/client/store/modules/nodes'
import account from '@/client/store/modules/account'
import plan from '@/client/store/modules/plan'
import settings from '@/client/store/modules/settings'

export default createStore({
  modules: {
    subscription,
    node,
    connection,
    quota,
    nodes,
    account,
    plan,
    settings
  },
  plugins: [createLogger(), prefetchStore]
})
