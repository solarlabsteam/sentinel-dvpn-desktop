import {
  CLEAR_QUOTA,
  SET_QUOTA,
  SET_QUOTA_LOADING_STATE
} from '@/client/store/mutation-types'

const getDefaultState = () => ({
  quota: null,
  isQuotaLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    quota: state => state.quota,
    isQuotaLoading: state => state.isQuotaLoading
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
    [CLEAR_QUOTA] (state) {
      state.quota = getDefaultState().quota
    }
  }
}
