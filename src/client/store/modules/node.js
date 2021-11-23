import { syncStoreValue } from '@/client/store/plugins/syncStore'
import {
  CLEAR_SELECTED_NODE,
  SET_SELECTED_NODE,
  SET_CONNECTED_NODE,
  CLEAR_CONNECTED_NODE,
  SET_DEFAULT_NODE_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null,
  connectedNode: null,
  isDefaultNodeLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode,
    connectedNode: state => state.connectedNode,
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
    async selectDefaultNode ({ dispatch, commit, getters }) {
      try {
        commit(SET_DEFAULT_NODE_LOADING_STATE, true)

        await Promise.allSettled([
          dispatch('fetchSubscribedNodes'),
          dispatch('fetchNodes')
        ])

        const node = getters.subscribedNodes[0] || getters.nodes[0]

        await Promise.allSettled([
          dispatch('selectNode', node),
          syncStoreValue('selectedNode', node)
        ])
      } catch (e) {
        console.error(e)
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
    [SET_DEFAULT_NODE_LOADING_STATE] (state, value) {
      console.log(value)
      state.isDefaultNodeLoading = value
    }
  }
}
