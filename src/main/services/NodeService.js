import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import SignService from '@/main/services/SignService'
import { QueryNodeRequest, QueryNodesRequest } from '@/main/proto/sentinel/node/v1/querier_pb.js'
import { QueryServiceClient as QueryNodeServiceClient } from '@/main/proto/sentinel/node/v1/querier_grpc_pb.js'
import QueryService from '@/main/services/QueryService'
import TransactionService from '@/main/services/TransactionService'
import DvpnApi from '@/main/api/rest/DvpnApi'
import RemoteNodeApi from '@/main/api/RemoteNodeApi'
import continents from '@/main/data/continents'

class NodeService {
  constructor () {
    this.signService = new SignService()
    this.restDvpnApi = new DvpnApi()
    this.transactionService = new TransactionService()
  }

  formatBandwidth (v) {
    const downloadKb = v / 1000
    const downloadMb = downloadKb / 1000
    const units = {
      mbs: 'MB/s',
      kbs: 'KB/s'
    }

    if (downloadKb >= 1000) {
      const value = downloadMb.toFixed(2)
      return {
        value,
        units: units.mbs,
        withUnits: `${value} ${units.mbs}`
      }
    } else {
      const value = downloadKb.toFixed(2)
      return {
        value,
        units: units.kbs,
        withUnits: `${value} ${units.kbs}`
      }
    }
  }

  countSignalLevel (d, u) {
    const averageSpeed = (d + u) / 2 / Math.pow(1000, 2)
    const averageSpeedPercentage = Number((averageSpeed / 40).toFixed(2))

    if (averageSpeedPercentage < 0.25) {
      return 'very-low'
    }
    if (averageSpeedPercentage < 0.5) {
      return 'low'
    }
    if (averageSpeedPercentage < 0.75) {
      return 'normal'
    }

    return 'high'
  }

  getPercentage (v) {
    if (v > 1) {
      return 1
    } else if (v < 0) {
      return 0
    } else {
      return Number(v.toFixed(2))
    }
  }

  countPricePercentage (v) {
    const raw = parseInt(v) / 1000000

    return this.getPercentage(raw)
  }

  countPeersPercentage (v, max = 100) {
    const raw = v / max

    return this.getPercentage(raw)
  }

  countLatencyPercentage (v) {
    const raw = v / 2000

    return this.getPercentage(raw)
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
    const startTime = new Date()
    const { data } = await this.queryNodeStatus(node.remoteUrl)

    if (data.result) {
      data.result.bandwidth.downloadDetailed = this.formatBandwidth(data.result.bandwidth.download)
      data.result.bandwidth.uploadDetailed = this.formatBandwidth(data.result.bandwidth.upload)
      data.result.bandwidth.signalLevel = this.countSignalLevel(data.result.bandwidth.download, data.result.bandwidth.upload)
      data.result.latencyPercentage = this.countLatencyPercentage(new Date() - startTime)
      data.result.peersPercentage = this.countPeersPercentage(data.result.peers, data.result.qos && data.result.qos.maxPeers)
      data.result.pricePercentage = this.countPricePercentage(data.result.price)
    }

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

  async queryContinentInfos (addresses) {
    const result = {}
    const nodeInfos = await this.queryNodeInfos(addresses)

    nodeInfos.forEach(n => {
      const continent = continents[n.location.country]

      if (!continent) return

      if (!result[continent]) {
        result[continent] = []
      }

      result[continent].push(n)
    })

    return result
  }
}

export default NodeService
