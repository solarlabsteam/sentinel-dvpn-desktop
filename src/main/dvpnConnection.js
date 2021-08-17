import { ipcMain } from 'electron'
import SentinelService from '@/main/sentinel/SentinelService'
import ConnectionService from '@/main/wireguard/СonnectionService'
import AccountService from '@/main/sentinel/AccountService'
import { accountKey } from '@/shared/constants'
import Notifications from '@/main/common/Notifications'
import { generateError } from '@/main/utils/errorHandler'
import SubscriptionService from '@/main/sentinel/SubscriptionService'
import initStore from '@/main/ipc/store/store'

const accountService = new AccountService()
const sentinelService = new SentinelService()
const subscriptionService = new SubscriptionService()

initStore()

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
  const address = accountService.getAddress(accountKey.mnemonic)

  try {
    const account = await accountService.queryAccount(address)
    const subscriptions = await sentinelService.querySubscriptionsForAddress(account.address)
    event.reply('SUBSCRIPTION_LIST', { data: subscriptions })
  } catch (e) {
    const error = generateError(e)
    Notifications.createCritical(error.message).show()
    event.reply('SUBSCRIPTION_LIST', { error })
  }
})

ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
  const address = accountService.getAddress(accountKey.mnemonic)

  try {
    const account = await accountService.queryAccount(address)
    const subscription = JSON.parse(payload)
    const activeSession = await sentinelService.startActiveSession(account.address, subscription)

    if (!activeSession) {
      Notifications.createCritical('Cannot create a session').show()
      event.reply('CONNECT_TO_NODE', { error: generateError({ message: 'Cannot create a session' }) })
      return
    }

    const nodeInfo = await sentinelService.queryNode(activeSession.node)
    const { result: info, privateKey } = await new ConnectionService().queryConnectionData(nodeInfo.remoteUrl, account.address, activeSession.id)
    const result = await sentinelService.queryConnectToNode(subscription.id, accountKey.name, subscription.node, info, privateKey)

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
    event.reply('SUBSCRIBE_TO_NODE', { error })
  }
})

ipcMain.on('QUOTA', async (event, payload) => {
  const address = accountService.getAddress(accountKey.mnemonic)

  try {
    const account = await accountService.queryAccount(address)
    const subscription = JSON.parse(payload)
    const result = await subscriptionService.queryQuota(subscription.id, account.address)
    event.reply('QUOTA', { data: result })
  } catch (e) {
    const error = generateError(e)
    Notifications.createCritical(error.message).show()
    event.reply('QUOTA', { error })
  }
})

ipcMain.on('SUBSCRIPTION_FOR_NODE', async (event, payload) => {
  const address = accountService.getAddress(accountKey.mnemonic)

  try {
    const account = await accountService.queryAccount(address)
    const node = JSON.parse(payload)
    const result = await subscriptionService.querySubscriptionsForNode(node.address, account.address)

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
