import { ipcMain } from 'electron'
import i18next from 'i18next'
import uint64be from 'uint64be'
import { DVPN_KEY_NAME } from '@/shared/constants'
import Notifications from '@/main/common/Notifications'
import { generateError } from '@/main/utils/errorHandler'
import ConnectionService from '@/main/services/СonnectionService'
import AccountService from '@/main/services/AccountService'
import NodeService from '@/main/services/NodeService'
import SessionService from '@/main/services/SessionService'
import SubscriptionService from '@/main/services/SubscriptionService'
import logger from '@/main/utils/logger'
import { CONNECT_TO_NODE, DISCONNECT, QUERY_CONNECTION_STATUS, QUERY_SERVICE_SERVER } from '@/shared/channel-types'
import SignService from '@/main/services/SignService'

const accountService = new AccountService()
const nodeService = new NodeService()
const sessionService = new SessionService()
const connectionService = new ConnectionService()
const subscriptionService = new SubscriptionService()
const signService = new SignService()

function initConnectionListeners () {
  ipcMain.on(CONNECT_TO_NODE, async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const { resolvers, node } = JSON.parse(payload)
      const subscription = await subscriptionService.querySubscriptionForAddress(key.addressBech32, node.address)

      if (!subscription) {
        const message = i18next.t('connection.error.noSubscription')
        logger.error(CONNECT_TO_NODE, message)
        Notifications.createCritical(message).show()
        event.reply(CONNECT_TO_NODE, { error: generateError({ message }) })
        return
      }

      try {
        const isBalanceEnough = await accountService.isBalanceEnoughForTransaction()

        if (!isBalanceEnough) {
          const message = i18next.t('connection.error.noBalance')
          logger.error(CONNECT_TO_NODE, message)
          Notifications.createCritical(message).show()
          event.reply(CONNECT_TO_NODE, { error: generateError({ message: message }) })
          return
        }
      } catch (e) {}

      const activeSession = await sessionService.startActiveSession(key.addressBech32, subscription)

      if (!activeSession) {
        const message = i18next.t('connection.error.noSession')
        logger.error(CONNECT_TO_NODE, message)
        Notifications.createCritical(message).show()
        event.reply(CONNECT_TO_NODE, { error: generateError({ message: message }) })
        return
      }

      const nodeInfo = await nodeService.queryNode(activeSession.node)
      const encodedBuffer = uint64be.encode(activeSession.id)
      const { signature } = await signService.querySignedBytes(Array.from(encodedBuffer))

      let connectionData
      try {
        connectionData = await connectionService.queryConnectionData(nodeInfo.remoteUrl, key.addressBech32, activeSession.id, signature)
      } catch (e) {
        const error = generateError(e)
        logger.error(CONNECT_TO_NODE, error.message)

        if (!e.response && e.response.status === 400) {
          Notifications.createCritical(i18next.t('connection.error.allDataUsed')).show()
          event.reply(CONNECT_TO_NODE, { error: { ...error, isResubscribeNeeded: true } })
          return
        }

        Notifications.createCritical(i18next.t('connection.error.unavailableNode')).show()
        event.reply(CONNECT_TO_NODE, { error })
        return
      }

      const result = await connectionService.queryConnectToNode(subscription.id, DVPN_KEY_NAME, subscription.node, connectionData.result, connectionData.privateKey, resolvers)
      event.reply(CONNECT_TO_NODE, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(CONNECT_TO_NODE, error.message)
      Notifications.createCritical(i18next.t('connection.error.common')).show()
      event.reply(CONNECT_TO_NODE, { error })
    }
  })

  ipcMain.on(DISCONNECT, async (event) => {
    try {
      const result = await connectionService.queryDisconnectFromNode()
      event.reply(DISCONNECT, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(DISCONNECT, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(DISCONNECT, { error })
    }
  })

  ipcMain.on(QUERY_CONNECTION_STATUS, async (event) => {
    try {
      const result = await connectionService.queryConnectionStatus()
      event.reply(QUERY_CONNECTION_STATUS, { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_CONNECTION_STATUS, { error })
    }
  })

  ipcMain.on(QUERY_SERVICE_SERVER, async (event) => {
    try {
      await connectionService.queryConnectionStatus()
      event.reply(QUERY_SERVICE_SERVER, { data: true })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_SERVICE_SERVER, error.message)
      event.reply(QUERY_SERVICE_SERVER, { data: false })
    }
  })
}

export default initConnectionListeners
