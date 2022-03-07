import { ipcMain } from 'electron'
import { DVPN_KEY_NAME } from '@/shared/constants'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import AccountService from '@/main/services/AccountService'
import SubscriptionService from '@/main/services/SubscriptionService'
import logger from '@/main/utils/logger'
import { QUERY_CHECKED_QUOTA, QUERY_QUOTA, UPDATE_QUOTA } from '@/shared/channel-types'

const accountService = new AccountService()
const subscriptionService = new SubscriptionService()

function initQuotaListeners () {
  ipcMain.on(QUERY_QUOTA, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscription = JSON.parse(payload)
      const result = await subscriptionService.queryQuota(subscription.id, key.addressBech32)
      event.reply(QUERY_QUOTA, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_QUOTA, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_QUOTA, { error })
    }
  })

  ipcMain.on(QUERY_CHECKED_QUOTA, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscription = JSON.parse(payload)
      const result = await subscriptionService.queryQuota(subscription.id, key.addressBech32)
      event.reply(QUERY_CHECKED_QUOTA, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_CHECKED_QUOTA, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_CHECKED_QUOTA, { error })
    }
  })

  ipcMain.on(UPDATE_QUOTA, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const { subscription, quota, bytes } = JSON.parse(payload)

      const result = await subscriptionService.updateQuota(quota, key.addressBech32, subscription, bytes)
      console.log(JSON.stringify(result, null, ' '))
      event.reply(UPDATE_QUOTA, { data: result })
    } catch (e) {
      console.log(JSON.stringify(e, null, ' '))
    }
  })
}

export default initQuotaListeners
