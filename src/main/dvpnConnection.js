// todo: hot reloading
import { ipcMain } from 'electron'
import axios from 'axios'
import CosmosService from '@/main/cosmos/CosmosService'
import SentinelService from '@/main/sentinel/SentinelService'
import connectionService from '@/main/wireguard/connectionService'
import AccountService from '@/main/sentinel/AccountService'
import { accountKey } from '@/shared/constants'

ipcMain.on('NODE_LIST', async event => {
  try {
    const nodes = await SentinelService.queryActiveNodes()
    event.reply('NODE_LIST', { data: nodes })
  } catch (e) {
    event.reply('NODE_LIST', { errors: e })
  }
})

ipcMain.on('SUBSCRIPTION_LIST', async event => {
  const address = CosmosService.getAddress(accountKey.mnemonic)
  const account = await AccountService.queryAccount(address)

  try {
    const subscriptions = await SentinelService.querySubscriptionsForAddress(account.address)
    event.reply('SUBSCRIPTION_LIST', { data: subscriptions })
  } catch (e) {
    event.reply('SUBSCRIPTION_LIST', { errors: e })
  }
})

ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
  const address = CosmosService.getAddress(accountKey.mnemonic)
  const account = await AccountService.queryAccount(address)

  try {
    const subscription = JSON.parse(payload)
    const activeSession = await SentinelService.startActiveSession(account.address, subscription)
    const nodeInfo = await SentinelService.queryNode(activeSession.node)
    const { result: info, privateKey } = await connectionService.queryConnectionData(nodeInfo.node.remoteUrl, account.address, activeSession.id)
    const result = await SentinelService.queryConnectToNode(subscription.id, 'test_sentinel_key', subscription.node, info, privateKey)
    console.log(result)

    event.reply('CONNECT_TO_NODE', { data: result.data })
  } catch (e) {
    console.log(e)
    if (e.isAxiosError) {
      event.reply('CONNECT_TO_NODE', { data: e.response.data })
    } else {
      event.reply('CONNECT_TO_NODE', { error: e })
    }
  }
})

ipcMain.on('DISCONNECT', async (event) => {
  try {
    const { data } = await axios.post('http://localhost:9090/api/v1/disconnect')
    event.reply('DISCONNECT', { data })
  } catch (e) {
    event.reply('DISCONNECT', { errors: e })
  }
})

ipcMain.on('SUBSCRIBE_TO_NODE', async (event, payload) => {
  try {
    const node = JSON.parse(payload)
    const result = await SentinelService.subscribeToNode(node.address, node.priceList[0])
    event.reply('SUBSCRIBE_TO_NODE', { data: result })
  } catch (e) {
    event.reply('SUBSCRIBE_TO_NODE', { errors: e })
  }
})
