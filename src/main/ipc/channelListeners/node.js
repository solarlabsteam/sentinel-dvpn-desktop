import { ipcMain } from 'electron'
import { generateError } from '@/main/utils/errorHandler'
import Notifications from '@/main/common/Notifications'
import NodeService from '@/main/services/NodeService'

const nodeService = new NodeService()

function initNodeListeners () {
  ipcMain.on('QUERY_NODE_LIST', async event => {
    try {
      const nodes = await nodeService.queryActiveNodes()
      event.reply('QUERY_NODE_LIST', { data: nodes })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_NODE_LIST', { error })
    }
  })

  ipcMain.on('QUERY_NODE_INFO', async (event, payload) => {
    try {
      const node = JSON.parse(payload)
      const result = await nodeService.queryNode(node.address)

      event.reply('QUERY_NODE_INFO', { data: result })
    } catch (e) {
      const error = generateError(e)
      Notifications.createCritical(error.message).show()
      event.reply('QUERY_NODE_INFO', { error })
    }
  })
}

export default initNodeListeners
