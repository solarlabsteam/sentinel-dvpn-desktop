import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import { LoginService } from '@/main/services/LoginService'

const loginService = new LoginService()

function initAccountListeners () {
  ipcMain.on('CHECK_LOGIN', async (event) => {
    try {
      const result = await loginService.login()
      event.reply('CHECK_LOGIN', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('CHECK_LOGIN', { error })
    }
  })

  ipcMain.on('ADD_ACCOUNT', async (event, payload) => {
    try {
      const data = JSON.parse(payload)
      await loginService.addAccount(data.mnemonic)
      event.reply('ADD_ACCOUNT', { data: { isLogin: true } })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('ADD_ACCOUNT', { error })
    }
  })
}

export default initAccountListeners
