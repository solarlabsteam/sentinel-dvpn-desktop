import {
  CLEAR_CURRENT_IP,
  SET_CONNECTION_LOADING_STATE,
  SET_CONNECTION_STATE,
  SET_CURRENT_IP,
  SET_CURRENT_IP_LOADING_STATE,
  SET_SERVICE_SERVER_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  isConnectionLoading: false,
  isConnected: false,
  currentIp: '',
  isCurrentIpLoading: false,
  isServiceServerAvailable: false
})

export default {
  state: getDefaultState(),

  getters: {
    isConnectionLoading: state => state.isConnectionLoading,
    isConnected: state => state.isConnected,
    currentIp: state => state.currentIp,
    isCurrentIpLoading: state => state.isCurrentIpLoading,
    isServiceServerAvailable: state => state.isServiceServerAvailable
  },

  actions: {
    connectToNode ({ commit, dispatch, getters }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      return Promise
        .resolve()
        .then(() => {
          return new Promise((resolve, reject) => {
            window.ipc.once('CONNECT_TO_NODE', (payload) => {
              if (payload.error) {
                reject(payload.error)
                return
              }

              resolve()
            })

            window.ipc.send('CONNECT_TO_NODE', JSON.stringify({
              node: getters.selectedNode,
              resolvers: getters.selectedDns.value.split(', ')
            }))
          })
        })
        .then(() => {
          dispatch('setConnectedNode', getters.selectedNode)
          commit(SET_CONNECTION_STATE, true)
        })
        .finally(() => {
          commit(SET_CONNECTION_LOADING_STATE, false)
        })
    },

    disconnectFromNode ({ commit, dispatch }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      return Promise
        .resolve()
        .then(() => {
          return new Promise((resolve, reject) => {
            window.ipc.once('DISCONNECT', (payload) => {
              if (payload.error) {
                reject(payload.error)
                return
              }

              resolve()
            })

            window.ipc.send('DISCONNECT')
          })
        })
        .then(() => {
          dispatch('clearConnectedNode')
          commit(SET_CONNECTION_STATE, false)
        })
        .finally(() => {
          commit(SET_CONNECTION_LOADING_STATE, false)
        })
    },

    fetchConnectionStatus ({ commit }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_CONNECTION_STATUS', (payload) => {
          if (payload.error) {
            commit(SET_CONNECTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CONNECTION_STATE, !!payload.data)
          commit(SET_CONNECTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_CONNECTION_STATUS')
      })
    },

    async fetchConnectionServerAvailability ({ commit }) {
      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_SERVICE_SERVER', (payload) => {
          if (payload.error) {
            reject(payload.error)
            return
          }

          commit(SET_SERVICE_SERVER_STATE, payload.data)
          resolve()
        })

        window.ipc.send('QUERY_SERVICE_SERVER')
      })
    }
  },

  mutations: {
    [SET_CONNECTION_LOADING_STATE] (state, value) {
      state.isConnectionLoading = value
    },
    [SET_CONNECTION_STATE] (state, value) {
      state.isConnected = value
    },
    [SET_CURRENT_IP] (state, value) {
      state.currentIp = value
    },
    [CLEAR_CURRENT_IP] (state) {
      state.currentIp = null
    },
    [SET_CURRENT_IP_LOADING_STATE] (state, value) {
      state.isCurrentIpLoading = value
    },
    [SET_SERVICE_SERVER_STATE] (state, value) {
      state.isServiceServerAvailable = value
    }
  }
}
