import { ipcMain } from 'electron'
import i18next from 'i18next'
import logger from 'electron-log'
import { DVPN_KEY_NAME } from '@/shared/constants'
import Notifications from '@/main/common/Notifications'
import { generateError } from '@/main/utils/errorHandler'
import ConnectionService from '@/main/services/СonnectionService'
import AccountService from '@/main/services/AccountService'
import NodeService from '@/main/services/NodeService'
import SessionService from '@/main/services/SessionService'

const accountService = new AccountService()
const nodeService = new NodeService()
const sessionService = new SessionService()
const connectionService = new ConnectionService()

function initConnectionListeners () {
  ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const { subscription, resolvers } = JSON.parse(payload)

      if (!subscription) {
        const message = i18next.t('connection.error.noSubscription')
        Notifications.createCritical(message).show()
        event.reply('CONNECT_TO_NODE', { error: generateError({ message }) })
        return
      }

      try {
        const isBalanceEnough = await accountService.isBalanceEnoughForTransaction()

        if (!isBalanceEnough) {
          const message = i18next.t('connection.error.noBalance')
          Notifications.createCritical(message).show()
          event.reply('CONNECT_TO_NODE', { error: generateError({ message: message }) })
          return
        }
      } catch (e) {}

      const activeSession = await sessionService.startActiveSession(key.addressBech32, subscription)

      if (!activeSession) {
        const message = i18next.t('connection.error.noSession')
        Notifications.createCritical(message).show()
        event.reply('CONNECT_TO_NODE', { error: generateError({ message: message }) })
        return
      }

      const nodeInfo = await nodeService.queryNode(activeSession.node)
      const { result: info, privateKey } = await connectionService.queryConnectionData(nodeInfo.remoteUrl, key.addressBech32, activeSession.id)
      const result = await connectionService.queryConnectToNode(subscription.id, DVPN_KEY_NAME, subscription.node, info, privateKey, resolvers)

      event.reply('CONNECT_TO_NODE', { data: result })
    } catch (e) {
      logger.error(e)
      const error = generateError(e)
      Notifications.createCritical(i18next.t('connection.error.common')).show()
      event.reply('CONNECT_TO_NODE', { error })
    }
  })

  ipcMain.on('DISCONNECT', async (event) => {
    try {
      const result = await connectionService.queryDisconnectFromNode()
      event.reply('DISCONNECT', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('DISCONNECT', { error })
    }
  })

  ipcMain.on('QUERY_CONNECTION_STATUS', async (event) => {
    try {
      const result = await connectionService.queryConnectionStatus()
      event.reply('QUERY_CONNECTION_STATUS', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_CONNECTION_STATUS', { error })
    }
  })

  ipcMain.on('QUERY_SERVICE_SERVER', async (event) => {
    try {
      await connectionService.queryConnectionStatus()
      event.reply('QUERY_SERVICE_SERVER', { data: true })
    } catch (e) {
      event.reply('QUERY_SERVICE_SERVER', { data: false })
    }
  })
}

export default initConnectionListeners
