import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import { DVPN_KEY_NAME } from '@/main/common/constants'
import ConnectionService from '@/main/wireguard/СonnectionService'
import AccountService from '@/main/sentinel/AccountService'
import SentinelService from '@/main/sentinel/SentinelService'
import SubscriptionService from '@/main/sentinel/SubscriptionService'
import { LoginService } from '@/main/sentinel/LoginService'

const accountService = new AccountService()
const sentinelService = new SentinelService()
const subscriptionService = new SubscriptionService()
const loginService = new LoginService()

function initChannelListeners () {
  ipcMain.on('NODE_LIST', async event => {
    try {
      const nodes = await sentinelService.queryActiveNodes()
      event.reply('NODE_LIST', { data: nodes })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('NODE_LIST', { error })
    }
  })

  ipcMain.on('SUBSCRIPTION_LIST', async event => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscriptions = await sentinelService.querySubscriptionsForAddress(key.addressBech32)
      event.reply('SUBSCRIPTION_LIST', { data: subscriptions })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('SUBSCRIPTION_LIST', { error })
    }
  })

  ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscription = JSON.parse(payload)
      const activeSession = await sentinelService.startActiveSession(key.addressBech32, subscription)

      if (!activeSession) {
        Notifications.createCritical('Cannot create a session').show()
        event.reply('CONNECT_TO_NODE', { error: generateError({ message: 'Cannot create a session' }) })
        return
      }

      const nodeInfo = await sentinelService.queryNode(activeSession.node)
      const { result: info, privateKey } = await new ConnectionService().queryConnectionData(nodeInfo.remoteUrl, key.addressBech32, activeSession.id)
      const result = await sentinelService.queryConnectToNode(subscription.id, DVPN_KEY_NAME, subscription.node, info, privateKey)

      event.reply('CONNECT_TO_NODE', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('CONNECT_TO_NODE', { error })
    }
  })

  ipcMain.on('DISCONNECT', async (event) => {
    try {
      const result = await sentinelService.queryDisconnectFromNode()
      event.reply('DISCONNECT', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('DISCONNECT', { error })
    }
  })

  ipcMain.on('SUBSCRIBE_TO_NODE', async (event, payload) => {
    try {
      const { deposit, node } = JSON.parse(payload)
      const result = await sentinelService.subscribeToNode(node.address, deposit)
      event.reply('SUBSCRIBE_TO_NODE', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      console.log(error.message)
      event.reply('SUBSCRIBE_TO_NODE', { error })
    }
  })

  ipcMain.on('QUOTA', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscription = JSON.parse(payload)
      const result = await subscriptionService.queryQuota(subscription.id, key.addressBech32)
      event.reply('QUOTA', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUOTA', { error })
    }
  })

  ipcMain.on('SUBSCRIPTION_FOR_NODE', async (event, payload) => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const node = JSON.parse(payload)
      const result = await subscriptionService.querySubscriptionsForNode(node.address, key.addressBech32)

      // todo: handle multiple subscriptions
      event.reply('SUBSCRIPTION_FOR_NODE', { data: result[0] })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('SUBSCRIPTION_FOR_NODE', { error })
    }
  })

  ipcMain.on('NODE_INFO', async (event, payload) => {
    try {
      const node = JSON.parse(payload)
      const result = await sentinelService.queryNode(node.address)

      event.reply('NODE_INFO', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('NODE_INFO', { error })
    }
  })

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

export default initChannelListeners
