import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import { QueryServiceClient as SessionQueryServiceClient } from '@/main/proto/sentinel/session/v1/querier_grpc_pb'
import { QuerySubscriptionsForAddressRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QuerySessionsForAddressRequest } from '@/main/proto/sentinel/session/v1/querier_pb'
import { MsgStartRequest, MsgEndRequest } from '@/main/proto/sentinel/session/v1/msg_pb'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import { BroadcastTxRequest, BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import { ServiceClient as TxServiceClient } from '@/main/proto/cosmos/tx/v1beta1/service_grpc_pb'
import CosmosService from '@/main/cosmos/CosmosService'
import { MsgSend } from '@/main/proto/cosmos/bank/v1beta1/tx_pb'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { urls } from '@/shared/constants'
import { QueryNodeRequest } from '@/main/proto/sentinel/node/v1/querier_pb.js'
import { QueryServiceClient as QueryNodeServiceClient } from '@/main/proto/sentinel/node/v1/querier_grpc_pb.js'
import axios from 'axios'

const grpc = require('@grpc/grpc-js')

const SentinelService = {}

SentinelService.querySubscriptionsForAddress = address => new Promise((resolve, reject) => {
  const client = new SubscriptionQueryServiceClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())
  const request = new QuerySubscriptionsForAddressRequest([address, Status.STATUS_ACTIVE])

  client.querySubscriptionsForAddress(request, (err, response) => {
    if (err) {
      reject(err)
      return
    }

    resolve(response.toObject())
  })
})

SentinelService.queryActiveSessionsForAddress = address => new Promise((resolve, reject) => {
  const client = new SessionQueryServiceClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())

  const request = new QuerySessionsForAddressRequest([address, Status.STATUS_ACTIVE])

  client.querySessionsForAddress(request, (err, response) => {
    if (err) {
      reject(err)
      return
    }

    const sessions = response.getSessionsList().map(session => session.toObject())
    resolve(sessions)
  })
})

SentinelService.broadcastTx = (txBytes, mode) => new Promise((resolve, reject) => {
  const client = new TxServiceClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())
  const request = new BroadcastTxRequest([txBytes, mode])

  client.broadcastTx(request, (err, response) => {
    if (err) {
      reject(err)
      return
    }

    resolve(response.toObject())
  })
})

SentinelService.startActiveSession = async (address, subscription) => {
  const msgStartRequest = new MsgStartRequest([address, subscription.id, subscription.node])
  const msgStartRequestAny = new Any([urls.startSessionURL, msgStartRequest.serializeBinary()])
  const msgsEndRequestAny = await SentinelService.getSessionMsgEndAny(address)
  const signedTxBytes = await CosmosService.getSignedRequest([...msgsEndRequestAny, msgStartRequestAny])
  await SentinelService.broadcastTx(signedTxBytes.serializeBinary(), BroadcastMode.BROADCAST_MODE_BLOCK)
  const activeSessions = await SentinelService.queryActiveSessionsForAddress(address)

  return activeSessions[0]
}

SentinelService.getSessionMsgEndAny = async address => {
  const sessions = await SentinelService.queryActiveSessionsForAddress(address)
  return sessions.map(session => {
    const msg = new MsgEndRequest([address, session.id])
    return new Any([urls.endSessionURL, msg.serializeBinary()])
  })
}

SentinelService.sendCoins = (address) => {
  const coin = new Coin(['udvpn', '100'])
  const msgSend = new MsgSend([address, 'sent1e7fka52pfqdushfezeg3w6swduklfskzx6vmfu', []])
  msgSend.addAmount(coin)
  // const msgStartRequestAny = new Any(['/cosmos.bank.v1beta1.MsgSend', msgSend.serializeBinary()])
}

SentinelService.queryNode = async address => new Promise((resolve, reject) => {
  const request = new QueryNodeRequest([address])
  const client = new QueryNodeServiceClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())

  client.queryNode(request, (err, response) => {
    if (err) {
      reject(err)
      return
    }

    resolve(response.toObject())
  })
})

SentinelService.queryConnectToNode = async (subscriptionId, keyName, nodeAddress, connectionInfo, wireguardPrivateKey) => {
  console.log(subscriptionId)
  try {
    const connectResponse = await axios.post('http://localhost:9090/api/v1/connect', {
      id: Number(subscriptionId),
      from: keyName,
      to: nodeAddress,
      info: connectionInfo,
      keys: [wireguardPrivateKey],
      resolvers: ['1.1.1.1', '1.0.0.1']
    })

    return connectResponse
  } catch (e) {
    console.log(e.response.data)
  }
}

export default SentinelService
