import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import SignService from '@/main/services/SignService'
import { QueryNodeRequest, QueryNodesRequest } from '@/main/proto/sentinel/node/v1/querier_pb.js'
import { QueryServiceClient as QueryNodeServiceClient } from '@/main/proto/sentinel/node/v1/querier_grpc_pb.js'
import QueryService from '@/main/api/QueryService'
import TransactionService from '@/main/services/TransactionService'
import DvpnApi from '@/main/api/rest/DvpnApi'

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
}

export default NodeService
