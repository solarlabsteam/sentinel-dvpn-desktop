import { setStoreValue } from '@/client/store/plugins/syncElectronStore'
import {
  CLEAR_SELECTED_NODE,
  SET_SELECTED_NODE,
  SET_CONNECTED_NODE,
  CLEAR_CONNECTED_NODE,
  SET_DEFAULT_NODE_LOADING_STATE,
  SET_DETAILED_NODE,
  CLEAR_DETAILED_NODE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null,
  connectedNode: null,
  isDefaultNodeLoading: false,
  detailedNode: null
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode,
    connectedNode: state => state.connectedNode,
    detailedNode: state => state.detailedNode,
    isDefaultNodeLoading: state => state.isDefaultNodeLoading
  },

  actions: {
    selectNode ({ commit }, node) {
      commit(SET_SELECTED_NODE, node)
    },
    clearSelectedNode ({ commit }) {
      commit(CLEAR_SELECTED_NODE)
    },
    setConnectedNode ({ commit }, node) {
      commit(SET_CONNECTED_NODE, node)
    },
    clearConnectedNode ({ commit }) {
      commit(CLEAR_CONNECTED_NODE)
    },
    setDetailedNode ({ commit }, node) {
      commit(SET_DETAILED_NODE, node)
    },
    clearDetailedNode ({ commit }) {
      commit(CLEAR_DETAILED_NODE)
    },
    async selectDefaultNode ({ dispatch, commit, getters }) {
      function findAvailableNode (nodes) {
        const firstList = Object.values(nodes)[0]

        return Array.isArray(firstList) && firstList[0] ? firstList[0] : null
      }

      try {
        commit(SET_DEFAULT_NODE_LOADING_STATE, true)

        await Promise.allSettled([
          dispatch('fetchSubscribedNodes'),
          dispatch('fetchNodes')
        ])

        const defaultSubscribedNode = getters.subscribedNodes[0]
        const defaultAvailableNode = findAvailableNode(getters.nodes)
        const node = defaultSubscribedNode || defaultAvailableNode

        await Promise.allSettled([
          dispatch('selectNode', node),
          setStoreValue('selectedNode', node)
        ])
      } finally {
        commit(SET_DEFAULT_NODE_LOADING_STATE, false)
      }
    }
  },

  mutations: {
    [SET_SELECTED_NODE] (state, payload) {
      state.selectedNode = payload
    },
    [CLEAR_SELECTED_NODE] (state) {
      state.selectedNode = getDefaultState().selectedNode
    },
    [SET_CONNECTED_NODE] (state, payload) {
      state.connectedNode = payload
    },
    [CLEAR_CONNECTED_NODE] (state) {
      state.connectedNode = getDefaultState().connectedNode
    },
    [SET_DETAILED_NODE] (state, payload) {
      state.detailedNode = payload
    },
    [SET_DEFAULT_NODE_LOADING_STATE] (state, value) {
      state.isDefaultNodeLoading = value
    }
  }
}
