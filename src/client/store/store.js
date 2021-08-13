import { createStore, createLogger } from 'vuex'
import subscriptions from '@/client/store/modules/subscriptions'
import subscription from '@/client/store/modules/subscription'
import node from '@/client/store/modules/node'

export default createStore({
  modules: {
    subscriptions,
    subscription,
    node
  },
  plugins: [createLogger()]
})
