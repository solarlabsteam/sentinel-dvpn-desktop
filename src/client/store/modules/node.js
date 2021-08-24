import {
  CLEAR_SELECTED_NODE,
  SET_SELECTED_NODE,
  SET_PAYMENT_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedNode: null,
  isPaymentLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    selectedNode: state => state.selectedNode,
    isPaymentLoading: state => state.isPaymentLoading
  },

  actions: {
    selectNode ({ commit }, node) {
      commit(SET_SELECTED_NODE, node)
    },
    subscribeToNode ({ commit, dispatch }, paymentInfo) {
      commit(SET_PAYMENT_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('SUBSCRIBE_TO_NODE', async (payload) => {
          if (payload.error) {
            commit(SET_PAYMENT_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_PAYMENT_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('SUBSCRIBE_TO_NODE', JSON.stringify(paymentInfo))
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
    [CLEAR_SELECTED_NODE] (state) {
      state.selectedNode = getDefaultState().selectedNode
    },
    [SET_PAYMENT_LOADING_STATE] (state, value) {
      state.isPaymentLoading = value
    }
  }
}
