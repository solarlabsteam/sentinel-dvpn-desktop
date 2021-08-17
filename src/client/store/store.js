import { createStore, createLogger } from 'vuex'
import { prefetchStore } from '@/client/store/plugins/syncStore'
import subscriptions from '@/client/store/modules/subscriptions'
import subscription from '@/client/store/modules/subscription'
import node from '@/client/store/modules/node'
import connection from '@/client/store/modules/connection'
import quota from '@/client/store/modules/quota'

export default createStore({
  modules: {
    subscriptions,
    subscription,
    node,
    connection,
    quota
  },
  plugins: [createLogger(), prefetchStore]
})
