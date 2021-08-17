import {
  CLEAR_CURRENT_SUBSCRIPTION,
  SET_CURRENT_SUBSCRIPTION,
  SET_CURRENT_SUBSCRIPTION_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  currentSubscription: null,
  isSubscriptionLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    currentSubscription: state => state.currentSubscription,
    isSubscriptionLoading: state => state.isSubscriptionLoading
  },

  actions: {
    fetchSubscriptionForNode ({ commit }, node) {
      commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('SUBSCRIPTION_FOR_NODE', (payload) => {
          if (payload.error) {
            commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CURRENT_SUBSCRIPTION, payload.data)
          commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('SUBSCRIPTION_FOR_NODE', node)
      })
    },
    clearSubscriptionForNode ({ commit }) {
      commit(CLEAR_CURRENT_SUBSCRIPTION)
    }
  },

  mutations: {
    [SET_CURRENT_SUBSCRIPTION] (state, payload) {
      state.currentSubscription = payload
    },
    [SET_CURRENT_SUBSCRIPTION_LOADING_STATE] (state, value) {
      state.isSubscriptionLoading = value
    },
    [CLEAR_CURRENT_SUBSCRIPTION] (state) {
      state.currentSubscription = getDefaultState().currentSubscription
    }
  }
}
