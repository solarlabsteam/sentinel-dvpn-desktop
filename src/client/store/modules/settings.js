import { google } from '@/client/constants/dns'
import { CLEAR_SELECTED_DNS, SET_SELECTED_DNS } from '@/client/store/mutation-types'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

const getDefaultState = () => ({
  selectedDns: google
})

export default {
  state: getDefaultState(),

  getters: {
    selectedDns: state => state.selectedDns
  },

  actions: {
    async selectDns ({ commit }, payload) {
      commit(SET_SELECTED_DNS, payload)
      await syncStoreValue('selectedDns', payload)
    }
  },

  mutations: {
    [SET_SELECTED_DNS] (state, payload) {
      state.selectedDns = payload
    },
    [CLEAR_SELECTED_DNS] (state) {
      state.selectedDns = getDefaultState().selectedDns
    }
  }
}
