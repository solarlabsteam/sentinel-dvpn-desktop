import {
  CLEAR_CURRENT_IP,
  SET_CONNECTION_LOADING_STATE,
  SET_CONNECTION_STATE,
  SET_CURRENT_IP,
  SET_CURRENT_IP_LOADING_STATE,
  SET_SERVICE_SERVER_STATE
} from '@/client/store/mutation-types'
import { once } from '@/client/store/helpers/promisifyIpc'
import { CONNECT_TO_NODE, DISCONNECT, QUERY_CONNECTION_STATUS, QUERY_SERVICE_SERVER } from '@/shared/channel-types'

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
    async connectToNode ({ commit, dispatch, getters }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      try {
        await once(CONNECT_TO_NODE, {
          node: getters.selectedNode,
          resolvers: getters.selectedDns.value.split(', ')
        })
        dispatch('setConnectedNode', getters.selectedNode)
        commit(SET_CONNECTION_STATE, true)
      } finally {
        commit(SET_CONNECTION_LOADING_STATE, false)
      }
    },

    async disconnectFromNode ({ commit, dispatch }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      try {
        await once(DISCONNECT)
        dispatch('clearConnectedNode')
        commit(SET_CONNECTION_STATE, false)
      } finally {
        commit(SET_CONNECTION_LOADING_STATE, false)
      }
    },

    async fetchConnectionStatus ({ commit }) {
      commit(SET_CONNECTION_LOADING_STATE, true)

      try {
        const data = await once(QUERY_CONNECTION_STATUS)
        commit(SET_CONNECTION_STATE, !!data)
      } finally {
        commit(SET_CONNECTION_LOADING_STATE, false)
      }
    },

    async fetchConnectionServerAvailability ({ commit }) {
      const data = await once(QUERY_SERVICE_SERVER)
      commit(SET_SERVICE_SERVER_STATE, data)
    },

    setConnectionLoadingState ({ commit }, value) {
      commit(SET_CONNECTION_LOADING_STATE, value)
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
