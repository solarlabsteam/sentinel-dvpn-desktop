import { CLEAR_SELECTED_PLAN, SET_SELECTED_CRYPTO, SET_SELECTED_PLAN } from '@/client/store/mutation-types'

const getDefaultState = () => ({
  selectedPlan: null,
  selectedCrypto: null
})

export default {
  state: getDefaultState(),

  getters: {
    selectedPlan: state => state.selectedPlan,
    selectedCrypto: state => state.selectedCrypto
  },

  actions: {
    selectPlan ({ commit }, payload) {
      commit(SET_SELECTED_PLAN, payload)
    },
    selectCrypto ({ commit }, payload) {
      commit(SET_SELECTED_CRYPTO, payload)
    },
    clearSelectedPlan ({ commit }) {
      commit(CLEAR_SELECTED_PLAN)
    }
  },

  mutations: {
    [SET_SELECTED_PLAN] (state, payload) {
      state.selectedPlan = payload
    },

    [SET_SELECTED_CRYPTO] (state, payload) {
      state.selectedCrypto = payload
    },

    [CLEAR_SELECTED_PLAN] (state) {
      const defaultState = getDefaultState()
      state.selectedPlan = defaultState.selectedPlan
      state.selectedCrypto = defaultState.selectedCrypto
    }
  }
}
