import { SET_SUBSCRIPTIONS, SET_SUBSCRIPTIONS_LOADING_STATE } from '@/client/store/mutation-types'

const getInitialState = () => ({
  subscriptions: [],
  isSubscriptionsLoading: false
})

export default {
  state: getInitialState(),

  getters: {
    subscriptions: state => state.subscriptions,
    isSubscriptionsLoading: state => state.isSubscriptionsLoading
  },

  actions: {
    fetchSubscriptions ({ commit }) {
      commit(SET_SUBSCRIPTIONS_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_SUBSCRIPTION_LIST', (payload) => {
          if (payload.error) {
            commit(SET_SUBSCRIPTIONS_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_SUBSCRIPTIONS, payload.data)
          commit(SET_SUBSCRIPTIONS_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_SUBSCRIPTION_LIST')
      })
    }
  },

  mutations: {
    [SET_SUBSCRIPTIONS] (state, payload) {
      state.subscriptions = payload
    },
    [SET_SUBSCRIPTIONS_LOADING_STATE] (state, value) {
      state.isSubscriptionsLoading = value
    }
  }
}
