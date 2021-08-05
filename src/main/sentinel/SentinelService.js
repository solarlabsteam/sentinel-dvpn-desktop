import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import { QueryServiceClient as SessionQueryServiceClient } from '@/main/proto/sentinel/session/v1/querier_grpc_pb'
import { QuerySubscriptionsForAddressRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QuerySessionsForAddressRequest } from '@/main/proto/sentinel/session/v1/querier_pb'
import { MsgStartRequest } from '@/main/proto/sentinel/session/v1/msg_pb'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import { BroadcastTxRequest, BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import { ServiceClient as TxServiceClient } from '@/main/proto/cosmos/tx/v1beta1/service_grpc_pb'
import CosmosService from '@/main/wallet/cosmos/CosmosService'
import { MsgSend } from '@/main/proto/cosmos/bank/v1beta1/tx_pb'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { urls } from '@/shared/constants'

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

SentinelService.querySessionsForAddress = address => new Promise((resolve, reject) => {
  const client = new SessionQueryServiceClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())

  const request = new QuerySessionsForAddressRequest([address, Status.STATUS_ACTIVE])

  client.querySessionsForAddress(request, (err, response) => {
    if (err) {
      reject(err)
      return
    }

    resolve(response.toObject())
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
  const signedTxBytes = await CosmosService.getSignedRequest([msgStartRequestAny])
  const result = await SentinelService.broadcastTx(signedTxBytes.serializeBinary(), BroadcastMode.BROADCAST_MODE_BLOCK)
  console.log(result)

  return await SentinelService.querySessionsForAddress(address)
}

SentinelService.sendCoins = (address) => {
  const coin = new Coin(['udvpn', '100'])
  const msgSend = new MsgSend([address, 'sent1e7fka52pfqdushfezeg3w6swduklfskzx6vmfu', []])
  msgSend.addAmount(coin)
  // const msgStartRequestAny = new Any(['/cosmos.bank.v1beta1.MsgSend', msgSend.serializeBinary()])
}

export default SentinelService
