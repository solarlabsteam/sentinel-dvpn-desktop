import { ipcMain } from 'electron'
import SentinelService from '@/main/sentinel/SentinelService'
import ConnectionService from '@/main/wireguard/СonnectionService'
import AccountService from '@/main/sentinel/AccountService'
import { accountKey } from '@/shared/constants'

const accountService = new AccountService()
const sentinelService = new SentinelService()

ipcMain.on('NODE_LIST', async event => {
  try {
    const nodes = await sentinelService.queryActiveNodes()
    event.reply('NODE_LIST', { data: nodes })
  } catch (e) {
    event.reply('NODE_LIST', { errors: e })
  }
})

ipcMain.on('SUBSCRIPTION_LIST', async event => {
  const address = accountService.getAddress(accountKey.mnemonic)
  const account = await accountService.queryAccount(address)

  try {
    const subscriptions = await sentinelService.querySubscriptionsForAddress(account.address)
    event.reply('SUBSCRIPTION_LIST', { data: subscriptions })
  } catch (e) {
    event.reply('SUBSCRIPTION_LIST', { errors: e })
  }
})

ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
  const address = accountService.getAddress(accountKey.mnemonic)
  const account = await accountService.queryAccount(address)

  try {
    const subscription = JSON.parse(payload)
    const activeSession = await sentinelService.startActiveSession(account.address, subscription)
    console.log(activeSession)
    const nodeInfo = await sentinelService.queryNode(activeSession.node)
    const { result: info, privateKey } = await new ConnectionService().queryConnectionData(nodeInfo.node.remoteUrl, account.address, activeSession.id)
    const result = await sentinelService.queryConnectToNode(subscription.id, accountKey.name, subscription.node, info, privateKey)

    event.reply('CONNECT_TO_NODE', { data: result })
  } catch (e) {
    if (e.isAxiosError) {
      event.reply('CONNECT_TO_NODE', { data: e.response.data })
    } else {
      event.reply('CONNECT_TO_NODE', { error: e })
    }
  }
})

ipcMain.on('DISCONNECT', async (event) => {
  try {
    const result = await sentinelService.queryDisconnectFromNode()
    event.reply('DISCONNECT', { data: result })
  } catch (e) {
    event.reply('DISCONNECT', { errors: e })
  }
})

ipcMain.on('SUBSCRIBE_TO_NODE', async (event, payload) => {
  try {
    const node = JSON.parse(payload)
    const result = await sentinelService.subscribeToNode(node.address, node.priceList[0])
    event.reply('SUBSCRIBE_TO_NODE', { data: result })
  } catch (e) {
    event.reply('SUBSCRIBE_TO_NODE', { errors: e })
  }
})
