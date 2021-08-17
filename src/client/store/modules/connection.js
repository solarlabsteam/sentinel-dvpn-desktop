import {
  SET_CONNECTION_LOADING_STATE, SET_CONNECTION_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  isConnectionLoading: false,
  isConnected: false
})

export default {
  state: getDefaultState(),

  getters: {
    isConnectionLoading: state => state.isConnectionLoading,
    isConnected: state => state.isConnected
  },

  actions: {
    connectToNode ({ commit }, subscription) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('CONNECT_TO_NODE', (payload) => {
          if (payload.error) {
            commit(SET_CONNECTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CONNECTION_STATE, true)
          commit(SET_CONNECTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('CONNECT_TO_NODE', subscription)
      })
    },

    disconnectFromNode ({ commit }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('DISCONNECT', (payload) => {
          if (payload.error) {
            commit(SET_CONNECTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CONNECTION_STATE, false)
          commit(SET_CONNECTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('DISCONNECT')
      })
    }
  },

  mutations: {
    [SET_CONNECTION_LOADING_STATE] (state, value) {
      state.isConnectionLoading = value
    },
    [SET_CONNECTION_STATE] (state, value) {
      state.isConnected = value
    }
  }
}
