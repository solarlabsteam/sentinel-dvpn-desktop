import {
  SET_NODES,
  SET_NODES_LOADING_STATE,
  SET_SUBSCRIBED_NODES,
  SET_SUBSCRIBED_NODES_LOADING_STATE
} from '@/client/store/mutation-types'
import { once } from '@/client/store/helpers/promisifyIpc'
import { QUERY_NODE_LIST, QUERY_SUBSCRIBED_NODE_LIST } from '@/shared/channel-types'

const getDefaultState = () => ({
  nodes: {},
  isNodesLoading: false,
  subscribedNodes: [],
  isSubscribedNodesLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    nodes: state => {
      Object.defineProperty(state.nodes, 'length', {
        enumerable: false,
        value: Object.keys(state.nodes).length
      })

      return state.nodes
    },
    isNodesLoading: state => state.isNodesLoading,
    subscribedNodes: state => state.subscribedNodes,
    isSubscribedNodesLoading: state => state.isSubscribedNodesLoading
  },

  actions: {
    async fetchNodes ({ commit }) {
      commit(SET_NODES_LOADING_STATE, true)

      try {
        const data = await once(QUERY_NODE_LIST)
        commit(SET_NODES, data)
      } finally {
        commit(SET_NODES_LOADING_STATE, false)
      }
    },

    async fetchSubscribedNodes ({ commit }) {
      commit(SET_SUBSCRIBED_NODES_LOADING_STATE, true)

      try {
        const data = await once(QUERY_SUBSCRIBED_NODE_LIST)
        commit(SET_SUBSCRIBED_NODES, data)
      } finally {
        commit(SET_SUBSCRIBED_NODES_LOADING_STATE, false)
      }
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
