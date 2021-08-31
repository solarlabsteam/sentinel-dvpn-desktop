import { CLEAR_SELECTED_PLAN, SET_SELECTED_CRYPTO, SET_SELECTED_PLAN } from '@/client/store/mutation-types'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

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
    async selectPlan ({ commit }, payload) {
      commit(SET_SELECTED_PLAN, payload)
      await syncStoreValue('selectedPlan', payload)
    },
    selectCrypto ({ commit }, payload) {
      commit(SET_SELECTED_CRYPTO, payload)
    },
    async clearSelectedPlan ({ commit }) {
      commit(CLEAR_SELECTED_PLAN)
      await syncStoreValue('selectedPlan', null)
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
