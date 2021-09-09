import { ipcMain } from 'electron'
import { DVPN_KEY_NAME } from '@/shared/constants'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import AccountService from '@/main/services/AccountService'
import SubscriptionService from '@/main/services/SubscriptionService'

const accountService = new AccountService()
const subscriptionService = new SubscriptionService()

function initQuotaListeners () {
  ipcMain.on('QUERY_QUOTA', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscription = JSON.parse(payload)
      const result = await subscriptionService.queryQuota(subscription.id, key.addressBech32)
      event.reply('QUERY_QUOTA', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_QUOTA', { error })
    }
  })
}

export default initQuotaListeners
