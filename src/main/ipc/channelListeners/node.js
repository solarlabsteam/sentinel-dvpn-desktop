import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import NodeService from '@/main/services/NodeService'
import SubscriptionService from '@/main/services/SubscriptionService'
import { DVPN_KEY_NAME } from '@/shared/constants'
import AccountService from '@/main/services/AccountService'

const nodeService = new NodeService()
const subscriptionService = new SubscriptionService()
const accountService = new AccountService()

function initNodeListeners () {
  ipcMain.on('QUERY_NODE_LIST', async event => {
    try {
      const nodes = await nodeService.queryActiveNodes()
      const addresses = nodes.map(n => n.address)
      const nodeInfos = await nodeService.queryNodeInfos(addresses)
      event.reply('QUERY_NODE_LIST', { data: nodeInfos })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_NODE_LIST', { error })
    }
  })

  ipcMain.on('QUERY_SUBSCRIBED_NODE_LIST', async event => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscriptions = await subscriptionService.querySubscriptionsForAddress(key.addressBech32)
      const addresses = subscriptions.map(s => s.node)
      const uniqAddresses = new Set(addresses)
      const nodeInfos = await nodeService.queryNodeInfos(Array.from(uniqAddresses))
      event.reply('QUERY_SUBSCRIBED_NODE_LIST', { data: nodeInfos })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_NODE_LIST', { error })
    }
  })

  ipcMain.on('QUERY_NODE', async (event, payload) => {
    try {
      const node = JSON.parse(payload)
      const result = await nodeService.queryNodeInfo(node.address)

      event.reply('QUERY_NODE', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_NODE', { error })
    }
  })
}

export default initNodeListeners
