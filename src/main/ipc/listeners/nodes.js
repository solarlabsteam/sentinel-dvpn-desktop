import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import logger from '@/main/utils/logger'
import Notifications from '@/main/common/Notifications'
import { DVPN_KEY_NAME } from '@/shared/constants'
import SubscriptionService from '@/main/services/SubscriptionService'
import AccountService from '@/main/services/AccountService'
import NodeService from '@/main/services/NodeService'
import { QUERY_NODE_LIST, QUERY_SUBSCRIBED_NODE_LIST } from '@/shared/channel-types'

const nodeService = new NodeService()
const subscriptionService = new SubscriptionService()
const accountService = new AccountService()

function initNodesListeners () {
  ipcMain.on(QUERY_NODE_LIST, async event => {
    try {
      const nodes = await nodeService.queryActiveNodes()
      const addresses = nodes.map(n => n.address)
      const nodeInfos = await nodeService.queryContinentInfos(addresses)
      event.reply(QUERY_NODE_LIST, { data: nodeInfos })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_NODE_LIST, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_NODE_LIST, { error })
    }
  })

  ipcMain.on(QUERY_SUBSCRIBED_NODE_LIST, async event => {
    try {
      const key = await accountService.queryKeyByName(DVPN_KEY_NAME)
      const subscriptions = await subscriptionService.querySubscriptionsForAddress(key.addressBech32)
      const addresses = subscriptions.map(s => s.node)
      const uniqAddresses = new Set(addresses)
      const nodeInfos = await nodeService.queryNodeInfos(Array.from(uniqAddresses))
      event.reply(QUERY_SUBSCRIBED_NODE_LIST, { data: nodeInfos })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_SUBSCRIBED_NODE_LIST, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_SUBSCRIBED_NODE_LIST, { error })
    }
  })
}

export default initNodesListeners
