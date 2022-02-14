import {
  SET_USER_LOADING_STATE,
  SET_USER,
  SET_BALANCES,
  SET_BALANCE_LOADING_STATE
} from '@/client/store/mutation-types'
import { setStoreValue } from '@/client/store/plugins/syncElectronStore'
import { once, onceForAll } from '@/client/store/helpers/promisifyIpc'
import { QUERY_USER, CREATE_USER, QUERY_BALANCES } from '@/shared/channel-types'

const getInitialState = () => ({
  user: null,
  isUserLoading: false,
  balances: [],
  isBalancesLoading: false
})

export default {
  state: getInitialState(),

  getters: {
    user: state => state.user,
    isUserLoading: state => state.isUserLoading,
    balances: state => state.balances,
    isBalancesLoading: state => state.isBalancesLoading
  },

  actions: {
    async fetchUser ({ commit }) {
      commit(SET_USER_LOADING_STATE, true)

      try {
        const user = await once(QUERY_USER)
        commit(SET_USER, user)
      } finally {
        commit(SET_USER_LOADING_STATE, false)
      }
    },

    async createUser ({ commit, dispatch }, payload = {}) {
      commit(SET_USER_LOADING_STATE, true)

      try {
        return await once(CREATE_USER, payload)
      } finally {
        commit(SET_USER_LOADING_STATE, false)
      }
    },

    async importUser ({ commit, dispatch }, payload = {}) {
      commit(SET_USER_LOADING_STATE, true)

      try {
        const { mnemonic, ...user } = await once(CREATE_USER, payload)
        await dispatch('setUser', user)
      } finally {
        commit(SET_USER_LOADING_STATE, false)
      }
    },

    async setUser ({ commit }, payload) {
      await setStoreValue('key', payload)
      commit(SET_USER, payload)
    },

    async fetchBalances ({ commit }) {
      commit(SET_BALANCE_LOADING_STATE, true)

      try {
        const balances = await onceForAll(QUERY_BALANCES)
        commit(SET_BALANCES, balances)
      } finally {
        commit(SET_BALANCE_LOADING_STATE, false)
      }
    }
  },

  mutations: {
    [SET_USER] (state, value) {
      state.user = value
    },
    [SET_USER_LOADING_STATE] (state, value) {
      state.isUserLoading = value
    },
    [SET_BALANCES] (state, payload) {
      state.balances = payload
    },
    [SET_BALANCE_LOADING_STATE] (state, value) {
      state.isBalancesLoading = value
    }
  }
}
