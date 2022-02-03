import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import { LoginService } from '@/main/services/LoginService'
import AccountService from '@/main/services/AccountService'
import logger from '@/main/utils/logger'
import { QUERY_USER, CREATE_USER, QUERY_BALANCES } from '@/shared/channel-types'

const loginService = new LoginService()
const accountService = new AccountService()

function initAccountListeners () {
  ipcMain.on(QUERY_USER, async (event) => {
    try {
      const result = await loginService.login()
      event.reply(QUERY_USER, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_USER, { error })
    }
  })

  ipcMain.on(CREATE_USER, async (event, payload) => {
    try {
      const data = JSON.parse(payload)
      const result = await loginService.addAccount(data.mnemonic)
      event.reply(CREATE_USER, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(error.message)
      Notifications.createCritical(error.message).show()
      event.reply(CREATE_USER, { error })
    }
  })

  ipcMain.on(QUERY_BALANCES, async (event) => {
    try {
      const balances = await accountService.queryBalances()
      event.reply(QUERY_BALANCES, { data: balances || [] })
    } catch (e) {
      const error = generateError(e)
      logger.error(error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_BALANCES, { error })
    }
  })
}

export default initAccountListeners
