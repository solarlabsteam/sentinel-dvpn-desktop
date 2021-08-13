import { SET_SELECTED_NODE } from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode
  },

  actions: {
    selectNode ({ commit }, node) {
      commit(SET_SELECTED_NODE, node)
    }
  },

  mutations: {
    [SET_SELECTED_NODE] (state, payload) {
      state.selectedNode = payload
    }
  }
}
