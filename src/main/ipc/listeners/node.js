import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import NodeService from '@/main/services/NodeService'
import logger from '@/main/utils/logger'
import { QUERY_NODE } from '@/shared/channel-types'

const nodeService = new NodeService()

function initNodeListeners () {
  ipcMain.on(QUERY_NODE, async (event, payload) => {
    try {
      const node = JSON.parse(payload)
      const result = await nodeService.queryNodeInfo(node.address)

      event.reply(QUERY_NODE, { data: result })
    } catch (e) {
      const error = generateError(e)
      logger.error(QUERY_NODE, error.message)
      Notifications.createCritical(error.message).show()
      event.reply(QUERY_NODE, { error })
    }
  })
}

export default initNodeListeners
