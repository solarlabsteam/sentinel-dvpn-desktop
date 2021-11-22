import {
  SET_NODES,
  SET_NODES_LOADING_STATE,
  SET_SUBSCRIBED_NODES,
  SET_SUBSCRIBED_NODES_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  nodes: [],
  isNodesLoading: false,
  subscribedNodes: [],
  isSubscribedNodesLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    nodes: state => state.nodes,
    isNodesLoading: state => state.isNodesLoading,
    subscribedNodes: state => state.subscribedNodes,
    isSubscribedNodesLoading: state => state.isSubscribedNodesLoading
  },

  actions: {
    fetchNodes ({ commit }) {
      commit(SET_NODES_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_NODE_LIST', (payload) => {
          if (payload.error) {
            commit(SET_NODES_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_NODES, payload.data)
          commit(SET_NODES_LOADING_STATE, false)
          resolve(payload.data)
        })

        window.ipc.send('QUERY_NODE_LIST')
      })
    },

    fetchSubscribedNodes ({ commit }) {
      commit(SET_SUBSCRIBED_NODES_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_SUBSCRIBED_NODE_LIST', (payload) => {
          if (payload.error) {
            commit(SET_SUBSCRIBED_NODES_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_SUBSCRIBED_NODES, payload.data)
          commit(SET_SUBSCRIBED_NODES_LOADING_STATE, false)
          resolve(payload.data)
        })

        window.ipc.send('QUERY_SUBSCRIBED_NODE_LIST')
      })
    }
  },

  mutations: {
    [SET_NODES] (state, payload) {
      state.nodes = payload
    },

    [SET_NODES_LOADING_STATE] (state, value) {
      state.isNodesLoading = value
    },

    [SET_SUBSCRIBED_NODES] (state, payload) {
      state.subscribedNodes = payload
    },

    [SET_SUBSCRIBED_NODES_LOADING_STATE] (state, value) {
      state.isSubscribedNodesLoading = value
    }
  }
}
