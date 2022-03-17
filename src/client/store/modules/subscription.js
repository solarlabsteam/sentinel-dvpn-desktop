import {
  CLEAR_CURRENT_SUBSCRIPTION, CLEAR_PAYMENT_RESULT, SET_CHECKED_SUBSCRIPTION, SET_CHECKED_SUBSCRIPTION_LOADING_STATE,
  SET_CURRENT_SUBSCRIPTION,
  SET_CURRENT_SUBSCRIPTION_LOADING_STATE, SET_PAYMENT_LOADING_STATE, SET_PAYMENT_RESULT, SET_UNSUBSCRIPTION_LOADING_STATE
} from '@/client/store/mutation-types'
import { setStoreValue } from '@/client/store/plugins/syncElectronStore'
import { once } from '@/client/store/helpers/promisifyIpc'
import {
  UNSUBSCRIBE_FROM_NODE,
  QUERY_CHECKED_SUBSCRIPTION_FOR_NODE,
  QUERY_SUBSCRIPTION_FOR_NODE,
  SUBSCRIBE_TO_NODE
} from '@/shared/channel-types'

const getDefaultState = () => ({
  currentSubscription: null,
  isSubscriptionLoading: false,
  isPaymentLoading: false,
  paymentResult: null,
  checkedSubscription: null,
  isCheckedSubscriptionLoading: false,
  isUnsubscriptionLoading: false
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
    async fetchSubscriptionForNode ({ commit, getters }) {
      commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, true)

      try {
        const data = await once(QUERY_SUBSCRIPTION_FOR_NODE, getters.selectedNode)
        commit(SET_CURRENT_SUBSCRIPTION, data)
      } finally {
        commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
      }
    },

    async fetchCheckedSubscriptionForNode ({ commit, getters }, node) {
      commit(SET_CHECKED_SUBSCRIPTION_LOADING_STATE, true)

      try {
        const data = await once(QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, node)
        commit(SET_CHECKED_SUBSCRIPTION, data)
      } finally {
        commit(SET_CURRENT_SUBSCRIPTION_LOADING_STATE, false)
      }
    },

    async subscribeToNode ({ commit, dispatch }, paymentInfo) {
      commit(SET_PAYMENT_LOADING_STATE, true)

      try {
        const data = await once(SUBSCRIBE_TO_NODE, paymentInfo)
        await dispatch('setPaymentResult', {
          success: true,
          response: data
        })
        dispatch('fetchSubscribedNodes')
      } catch (e) {
        await dispatch('setPaymentResult', {
          success: false,
          response: e
        })
        throw e
      } finally {
        commit(SET_PAYMENT_LOADING_STATE, false)
      }
    },

    async unsubscribeFromNode ({ commit, dispatch }, payload) {
      commit(SET_UNSUBSCRIPTION_LOADING_STATE, true)

      try {
        await once(UNSUBSCRIBE_FROM_NODE, payload)
      } finally {
        commit(SET_UNSUBSCRIPTION_LOADING_STATE, false)
      }
    },

    clearSubscriptionForNode ({ commit }) {
      commit(CLEAR_CURRENT_SUBSCRIPTION)
    },
    async setPaymentResult ({ commit }, payload) {
      commit(SET_PAYMENT_RESULT, payload)
      await setStoreValue('paymentResult', payload)
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
    },
    [SET_UNSUBSCRIPTION_LOADING_STATE] (state) {
      state.isUnsubscriptionLoading = false
    }
  }
}
