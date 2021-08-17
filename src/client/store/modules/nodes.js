import { SET_NODES, SET_NODES_LOADING_STATE } from '@/client/store/mutation-types'

const getDefaultState = () => ({
  nodes: [],
  isNodesLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    nodes: state => state.nodes,
    isNodesLoading: state => state.isNodesLoading
  },

  actions: {
    fetchNodes ({ commit }) {
      commit(SET_NODES_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('NODE_LIST', (payload) => {
          if (payload.error) {
            commit(SET_NODES_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_NODES, payload.data)
          commit(SET_NODES_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('NODE_LIST')
      })
    }
  },

  mutations: {
    [SET_NODES] (state, payload) {
      state.nodes = payload
    },

    [SET_NODES_LOADING_STATE] (state, value) {
      state.isNodesLoading = value
    }
  }
}
