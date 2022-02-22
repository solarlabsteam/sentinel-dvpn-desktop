import {
  CLEAR_QUOTA, SET_CHECKED_QUOTA, SET_CHECKED_QUOTA_LOADING_STATE,
  SET_QUOTA,
  SET_QUOTA_LOADING_STATE
} from '@/client/store/mutation-types'
import { once } from '@/client/store/helpers/promisifyIpc'
import { QUERY_CHECKED_QUOTA, QUERY_QUOTA } from '@/shared/channel-types'

const getDefaultState = () => ({
  quota: null,
  isQuotaLoading: false,
  checkedQuota: null,
  isCheckedQuotaLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    quota: state => state.quota,
    isQuotaLoading: state => state.isQuotaLoading,
    checkedQuota: state => state.checkedQuota,
    isCheckedQuotaLoading: state => state.isCheckedQuotaLoading
  },

  actions: {
    async fetchQuota ({ commit, getters }) {
      commit(SET_QUOTA_LOADING_STATE, true)

      try {
        const data = await once(QUERY_QUOTA, getters.currentSubscription)
        commit(SET_QUOTA, data)
      } finally {
        commit(SET_QUOTA_LOADING_STATE, false)
      }
    },

    async fetchCheckedQuota ({ commit, getters }, subscription) {
      commit(SET_CHECKED_QUOTA_LOADING_STATE, true)

      try {
        const data = await once(QUERY_CHECKED_QUOTA, subscription)
        commit(SET_CHECKED_QUOTA, data)
      } finally {
        commit(SET_CHECKED_QUOTA_LOADING_STATE, false)
      }
    },
    clearQuota ({ commit }) {
      commit(CLEAR_QUOTA)
    }
  },

  mutations: {
    [SET_QUOTA] (state, payload) {
      state.quota = payload
    },
    [SET_QUOTA_LOADING_STATE] (state, value) {
      state.isQuotaLoading = value
    },
    [SET_CHECKED_QUOTA] (state, payload) {
      state.checkedQuota = payload
    },
    [SET_CHECKED_QUOTA_LOADING_STATE] (state, value) {
      state.isCheckedQuotaLoading = value
    },
    [CLEAR_QUOTA] (state) {
      state.quota = getDefaultState().quota
    }
  }
}
