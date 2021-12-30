import {
  CLEAR_CURRENT_SUBSCRIPTION, CLEAR_PAYMENT_RESULT, SET_CHECKED_SUBSCRIPTION, SET_CHECKED_SUBSCRIPTION_LOADING_STATE,
  SET_CURRENT_SUBSCRIPTION,
  SET_CURRENT_SUBSCRIPTION_LOADING_STATE, SET_PAYMENT_LOADING_STATE, SET_PAYMENT_RESULT
} from '@/client/store/mutation-types'
import { syncStoreValue } from '@/client/store/plugins/syncStore'

const getDefaultState = () => ({
  currentSubscription: null,
  isSubscriptionLoading: false,
  isPaymentLoading: false,
  paymentResult: null,
  checkedSubscription: null,
  isCheckedSubscriptionLoading: false
})

export default {
  state: getDefaultState(),

  getters: {
    currentSubscription: state => state.currentSubscription,
    isSubscriptionLoading: state => state.isSubscriptionLoading,
    isPaymentLoading: state => state.isPaymentLoading,
    checkedSubscription: state => state.checkedSubscription,
    isCheckedSubscriptionLoading: state => state.isCheckedSubscriptionLoading,
    paymentResult: state => state.paymentResult
  },

  actions: {
    fetchSubscriptionForNode ({ commit, getters }) {
      commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_SUBSCRIPTION_FOR_NODE', (payload) => {
          if (payload.error) {
            commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CURRENT_SUBSCRIPTION, payload.data)
          commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_SUBSCRIPTION_FOR_NODE', JSON.stringify(getters.selectedNode))
      })
    },
    fetchCheckedSubscriptionForNode ({ commit, getters }, node) {
      commit(SET_CHECKED_SUBSCRIPTION_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('QUERY_CHECKED_SUBSCRIPTION_FOR_NODE', (payload) => {
          if (payload.error) {
            commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          commit(SET_CHECKED_SUBSCRIPTION, payload.data)
          commit(SET_CHECKED_SUBSCRIPTION_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('QUERY_CHECKED_SUBSCRIPTION_FOR_NODE', JSON.stringify(node))
      })
    },
    subscribeToNode ({ commit, dispatch }, paymentInfo) {
      commit(SET_PAYMENT_LOADING_STATE, true)

      return new Promise((resolve, reject) => {
        window.ipc.once('SUBSCRIBE_TO_NODE', async (payload) => {
          let result
          if (payload.error) {
            result = {
              success: false,
              response: payload.error
            }
            await dispatch('setPaymentResult', result)
            commit(SET_PAYMENT_LOADING_STATE, false)
            reject(payload.error)
            return
          }

          result = {
            success: true,
            response: payload.data
          }

          await dispatch('setPaymentResult', result)
          commit(SET_PAYMENT_LOADING_STATE, false)
          resolve()
        })

        window.ipc.send('SUBSCRIBE_TO_NODE', JSON.stringify(paymentInfo))
      })
    },
    clearSubscriptionForNode ({ commit }) {
      commit(CLEAR_CURRENT_SUBSCRIPTION)
    },
    async setPaymentResult ({ commit }, payload) {
      commit(SET_PAYMENT_RESULT, payload)
      await syncStoreValue('paymentResult', payload)
    },
    clearPaymentResult ({ commit }) {
      commit(CLEAR_PAYMENT_RESULT)
    }
  },

  mutations: {
    [SET_CURRENT_SUBSCRIPTION] (state, payload) {
      state.currentSubscription = payload
    },
    [SET_CURRENT_SUBSCRIPTION_LOADING_STATE] (state, value) {
      state.isSubscriptionLoading = value
    },
    [SET_CHECKED_SUBSCRIPTION] (state, payload) {
      state.checkedSubscription = payload
    },
    [SET_CHECKED_SUBSCRIPTION_LOADING_STATE] (state, value) {
      state.isCheckedSubscriptionLoading = value
    },
    [CLEAR_CURRENT_SUBSCRIPTION] (state) {
      state.currentSubscription = getDefaultState().currentSubscription
    },
    [SET_PAYMENT_LOADING_STATE] (state, value) {
      state.isPaymentLoading = value
    },
    [SET_PAYMENT_RESULT] (state, payload) {
      state.paymentResult = payload
    },
    [CLEAR_PAYMENT_RESULT] (state) {
      state.paymentResult = null
    }
  }
}
