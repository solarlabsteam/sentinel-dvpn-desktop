import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import { LoginService } from '@/main/services/LoginService'
import AccountService from '@/main/services/AccountService'

const loginService = new LoginService()
const accountService = new AccountService()

function initAccountListeners () {
  ipcMain.on('QUERY_USER', async (event) => {
    try {
      const result = await loginService.login()
      event.reply('QUERY_USER', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_USER', { error })
    }
  })

  ipcMain.on('ADD_ACCOUNT', async (event, payload) => {
    try {
      const data = JSON.parse(payload)
      const result = await loginService.addAccount(data.mnemonic)
      event.reply('ADD_ACCOUNT', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('ADD_ACCOUNT', { error })
    }
  })

  ipcMain.on('QUERY_BALANCES', async (event) => {
    try {
      const balances = await accountService.queryBalances()
      event.reply('QUERY_BALANCES', { data: balances || [] })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_BALANCES', { error })
    }
  })
}

export default initAccountListeners
