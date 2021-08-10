import { SET_SUBSCRIPTIONS, SET_SUBSCRIPTIONS_LOADING_STATE } from '@/client/store/mutation-types'

const getInitialState = () => ({
  subscriptions: [],
  isLoading: false
})

export default {
  state: getInitialState(),

  getters: {
    subscriptions: state => state.subscriptions,
    isSubscriptionsLoading: state => state.isLoading
  },

  actions: {
    fetchSubscriptions ({ commit }) {
      commit(SET_SUBSCRIPTIONS_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('SUBSCRIPTION_LIST', (payload) => {
          if (payload.error) {
            // todo calling error mutation
            commit(SET_SUBSCRIPTIONS_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_SUBSCRIPTIONS, payload.data)
          commit(SET_SUBSCRIPTIONS_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('SUBSCRIPTION_LIST')
      })
    }
  },

  mutations: {
    [SET_SUBSCRIPTIONS] (state, payload) {
      state.subscriptions = payload
    },
    [SET_SUBSCRIPTIONS_LOADING_STATE] (state, payload) {
      state.isLoading = payload
    }
  }
}
