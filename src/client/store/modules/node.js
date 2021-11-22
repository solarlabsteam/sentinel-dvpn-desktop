import { syncStoreValue } from '@/client/store/plugins/syncStore'
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
    },
    async selectDefaultNode ({ dispatch }) {
      const result = await Promise.allSettled([
        dispatch('fetchSubscribedNodes'),
        dispatch('fetchNodes')
      ])

      const nodes = result
        .filter(r => r.status === 'fulfilled')
        .find(r => Array.isArray(r.value) && r.value.length > 0)

      if (Array.isArray(nodes.value)) {
        await Promise.allSettled([
          dispatch('selectNode', nodes.value[0]),
          syncStoreValue('selectedNode', nodes.value[0])
        ])
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
    }
  }
}
