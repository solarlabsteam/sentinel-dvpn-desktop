import { createStore, createLogger } from 'vuex'
import subscriptions from '@/client/store/modules/subscriptions'

export default createStore({
  modules: {
    subscriptions
  },
  plugins: [createLogger()]
})
