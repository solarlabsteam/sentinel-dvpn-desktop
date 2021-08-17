import {
  CLEAR_SELECTED_NODE,
  SET_SELECTED_NODE, SET_SELECTED_NODE_INFO, SET_SELECTED_NODE_INFO_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null,
  selectedNodeInfo: null,
  selectedNodeInfoLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode,
    selectedNodeInfo: state => state.selectedNodeInfo,
    selectedNodeInfoLoading: state => state.selectedNodeInfoLoading
  },

  actions: {
    selectNode ({ commit }, node) {
      commit(SET_SELECTED_NODE, node)
    },
    fetchSelectedNodeInfo ({ commit }, node) {
      commit(SET_SELECTED_NODE_INFO_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('NODE_INFO', (payload) => {
          if (payload.error) {
            commit(SET_SELECTED_NODE_INFO_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_SELECTED_NODE_INFO, payload.data)
          commit(SET_SELECTED_NODE_INFO_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('NODE_INFO', node)
      })
    },
    subscribeToNode ({ commit, dispatch }, node) {
      commit(SET_SELECTED_NODE_INFO_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('SUBSCRIBE_TO_NODE', async (payload) => {
          if (payload.error) {
            commit(SET_SELECTED_NODE_INFO_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_SELECTED_NODE_INFO_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('SUBSCRIBE_TO_NODE', node)
      })
    },
    clearSelectedNode ({ commit }) {
      commit(CLEAR_SELECTED_NODE)
    }
  },

  mutations: {
    [SET_SELECTED_NODE] (state, payload) {
      state.selectedNode = payload
    },
    [SET_SELECTED_NODE_INFO] (state, payload) {
      state.selectedNodeInfo = payload
    },
    [SET_SELECTED_NODE_INFO_LOADING_STATE] (state, value) {
      state.selectedNodeInfoLoading = value
    },
    [CLEAR_SELECTED_NODE] (state) {
      state.selectedNode = getDefaultState().selectedNode
      state.selectedNodeInfo = getDefaultState().selectedNodeInfo
    }
  }
}
