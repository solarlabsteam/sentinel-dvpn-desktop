import {
  CLEAR_QUOTA, SET_CHECKED_QUOTA, SET_CHECKED_QUOTA_LOADING_STATE,
  SET_QUOTA,
  SET_QUOTA_LOADING_STATE
} from '@/client/store/mutation-types'

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
    fetchQuota ({ commit, getters }) {
      commit(SET_QUOTA_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_QUOTA', (payload) => {
          if (payload.error) {
            commit(SET_QUOTA_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_QUOTA, payload.data)
          commit(SET_QUOTA_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_QUOTA', JSON.stringify(getters.currentSubscription))
      })
    },
    fetchCheckedQuota ({ commit, getters }, subscription) {
      commit(SET_CHECKED_QUOTA_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_CHECKED_QUOTA', (payload) => {
          if (payload.error) {
            commit(SET_CHECKED_QUOTA_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CHECKED_QUOTA, payload.data)
          commit(SET_CHECKED_QUOTA_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_CHECKED_QUOTA', JSON.stringify(subscription))
      })
    },
    updateQuota ({ commit, getters }) {
      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_QUOTA', (payload) => {
          if (payload.error) {
            reject(payload.error)
            return
          }

          commit(SET_QUOTA, payload.data)
          resolve()
        })

        window.ipc.send('QUERY_QUOTA', JSON.stringify(getters.currentSubscription))
      })
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
