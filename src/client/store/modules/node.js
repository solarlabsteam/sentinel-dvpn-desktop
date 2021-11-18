import {
  CLEAR_SELECTED_NODE,
  SET_SELECTED_NODE,
  SET_CONNECTED_NODE,
  CLEAR_CONNECTED_NODE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null,
  connectedNode: null
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode,
    connectedNode: state => state.connectedNode
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
    }
  }
}
