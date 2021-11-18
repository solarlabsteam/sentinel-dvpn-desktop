import { ipcMain } from 'electron'
import { DVPN_KEY_NAME } from '@/shared/constants'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import SubscriptionService from '@/main/services/SubscriptionService'
import AccountService from '@/main/services/AccountService'

const accountService = new AccountService()
const subscriptionService = new SubscriptionService()

function initSubscriptionListeners () {
  ipcMain.on('QUERY_SUBSCRIPTION_LIST', async event => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscriptions = await subscriptionService.querySubscriptionsForAddress(key.addressBech32)
      event.reply('QUERY_SUBSCRIPTION_LIST', { data: subscriptions })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_SUBSCRIPTION_LIST', { error })
    }
  })

  ipcMain.on('SUBSCRIBE_TO_NODE', async (event, payload) => {
    try {
      const { deposit, node } = JSON.parse(payload)
      const result = await subscriptionService.subscribeToNode(node.address, deposit)
      event.reply('SUBSCRIBE_TO_NODE', { data: result })
    } catch (response) {
      const error = generateError(response.rawLog)
      Notifications.createCritical(error.message).show()
      event.reply('SUBSCRIBE_TO_NODE', { error: response })
    }
  })

  ipcMain.on('QUERY_SUBSCRIPTION_FOR_NODE', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const node = JSON.parse(payload)
      const result = await subscriptionService.querySubscriptionForAddress(key.addressBech32, node.address)

      event.reply('QUERY_SUBSCRIPTION_FOR_NODE', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_SUBSCRIPTION_FOR_NODE', { error })
    }
  })
}

export default initSubscriptionListeners
