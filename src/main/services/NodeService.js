import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import SignService from '@/main/services/SignService'
import { QueryNodeRequest, QueryNodesRequest } from '@/main/proto/sentinel/node/v1/querier_pb.js'
import { QueryServiceClient as QueryNodeServiceClient } from '@/main/proto/sentinel/node/v1/querier_grpc_pb.js'
import QueryService from '@/main/services/QueryService'
import TransactionService from '@/main/services/TransactionService'
import DvpnApi from '@/main/api/rest/DvpnApi'
import RemoteNodeApi from '@/main/api/RemoteNodeApi'

class NodeService {
  constructor () {
    this.signService = new SignService()
    this.restDvpnApi = new DvpnApi()
    this.transactionService = new TransactionService()
  }

  async queryNode (address) {
    return new Promise((resolve, reject) => {
      const request = new QueryNodeRequest([address])
      const client = QueryService.create(QueryNodeServiceClient)
      client.queryNode(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.toObject().node)
      })
    })
  }

  async queryNodeStatus (remoteUrl) {
    const api = new RemoteNodeApi(remoteUrl)
    return await api.queryNodeStatus()
  }

  async queryNodeInfo (address) {
    const node = await this.queryNode(address)
    const { data } = await this.queryNodeStatus(node.remoteUrl)

    return {
      ...node,
      ...data.result || {}
    }
  }

  async queryActiveNodes (offset = 0, limit = 25) {
    return new Promise((resolve, reject) => {
      const request = new QueryNodesRequest([Status.STATUS_ACTIVE])
      const client = QueryService.create(QueryNodeServiceClient)

      client.queryNodes(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.getNodesList().map(node => node.toObject()))
      })
    })
  }

  async queryNodeInfos (addresses) {
    const result = await Promise.allSettled(addresses.map(a => {
      return this.queryNodeInfo(a)
    }))

    return result
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value)
  }
}

export default NodeService
