import { ipcMain } from 'electron'
import { DVPN_KEY_NAME } from '@/shared/constants'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import SubscriptionService from '@/main/services/SubscriptionService'
import AccountService from '@/main/services/AccountService'
import logger from '@/main/utils/logger'
import {
  QUERY_CHECKED_SUBSCRIPTION_FOR_NODE,
  QUERY_SUBSCRIPTION_FOR_NODE,
  SUBSCRIBE_TO_NODE
} from '@/shared/channel-types'

const accountService = new AccountService()
const subscriptionService = new SubscriptionService()

function initSubscriptionListeners () {
  ipcMain.on(SUBSCRIBE_TO_NODE, async (event, payload) => {
    let n, d
    try {
      const { deposit, node } = JSON.parse(payload)
      n = node
      d = deposit
      const result = await subscriptionService.subscribeToNode(node.address, deposit)
      event.reply(SUBSCRIBE_TO_NODE, { data: result })
    } catch (e) {
      const error = generateError(e.rawLog || e)
      logger.error(SUBSCRIBE_TO_NODE, `${n && n.address} ${d && d.denom} ${error.message}`)
      Notifications.createCritical(error.message).show()
      event.reply(SUBSCRIBE_TO_NODE, { error })
    }
  })

  ipcMain.on(QUERY_SUBSCRIPTION_FOR_NODE, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const node = JSON.parse(payload)
      const result = await subscriptionService.querySubscriptionForAddress(key.addressBech32, node.address)

      event.reply(QUERY_SUBSCRIPTION_FOR_NODE, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_SUBSCRIPTION_FOR_NODE, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_SUBSCRIPTION_FOR_NODE, { error })
    }
  })

  ipcMain.on(QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const node = JSON.parse(payload)
      const result = await subscriptionService.querySubscriptionForAddress(key.addressBech32, node.address)

      event.reply(QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, { error })
    }
  })
}

export default initSubscriptionListeners
