import {
  SET_USER_LOADING_STATE,
  SET_USER,
  SET_BALANCES
} from '@/client/store/mutation-types'

const getInitialState = () => ({
  user: null,
  isUserLoading: false,
  balances: []
})

export default {
  state: getInitialState(),

  getters: {
    user: state => state.user,
    isUserLoading: state => state.isUserLoading,
    balances: state => state.balances
  },

  actions: {
    fetchUser ({ commit }) {
      commit(SET_USER_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_USER', payload => {
          if (payload.error) {
            commit(SET_USER_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_USER, payload.data)
          commit(SET_USER_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_USER')
      })
    },

    addAccount ({ commit }, payload = {}) {
      commit(SET_USER_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('ADD_ACCOUNT', payload => {
          if (payload.error) {
            commit(SET_USER_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_USER, payload.data)
          commit(SET_USER_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('ADD_ACCOUNT', JSON.stringify(payload))
      })
    },

    fetchBalances ({ commit }) {
      window.ipc.removeAllListeners('QUERY_BALANCES')

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_BALANCES', payload => {
          if (payload.error) {
            reject(payload.error)
            return
          }

          commit(SET_BALANCES, payload.data)
          resolve()
        })

        window.ipc.send('QUERY_BALANCES')
      })
    }
  },

  mutations: {
    [SET_USER] (state, value) {
      state.user = value
    },
    [SET_USER_LOADING_STATE] (state, value) {
      state.isUserLoading = value
    },
    [SET_BALANCES] (state, payload) {
      state.balances = payload
    }
  }
}
