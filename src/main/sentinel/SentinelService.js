import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import { QueryServiceClient as SessionQueryServiceClient } from '@/main/proto/sentinel/session/v1/querier_grpc_pb'
import { QuerySubscriptionsForAddressRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QuerySessionsForAddressRequest } from '@/main/proto/sentinel/session/v1/querier_pb'
import { MsgStartRequest, MsgEndRequest } from '@/main/proto/sentinel/session/v1/msg_pb'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import { BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import SignService from '@/main/sentinel/SignService'
import { MsgSend } from '@/main/proto/cosmos/bank/v1beta1/tx_pb'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { QueryNodeRequest, QueryNodesRequest } from '@/main/proto/sentinel/node/v1/querier_pb.js'
import { QueryServiceClient as QueryNodeServiceClient } from '@/main/proto/sentinel/node/v1/querier_grpc_pb.js'
import { MsgSubscribeToNodeRequest } from '@/main/proto/sentinel/subscription/v1/msg_pb.js'
import QueryService from '@/main/api/QueryService'
import RestFetchApi from '@/main/api/RestFetchApi'
import AccountService from '@/main/sentinel/AccountService'
import { DENOM } from '@/shared/constants'
import TransactionService from '@/main/sentinel/TransactionService'

class SentinelService {
  constructor () {
    this.accountService = new AccountService()
    this.signService = new SignService()
    this.restFetchApi = new RestFetchApi()
    this.transactionService = new TransactionService()
  }

  querySubscriptionsForAddress (address) {
    return new Promise((resolve, reject) => {
      const client = QueryService.create(SubscriptionQueryServiceClient)
      const request = new QuerySubscriptionsForAddressRequest([address, Status.STATUS_ACTIVE])

      client.querySubscriptionsForAddress(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const subscriptions = response.getSubscriptionsList().map(s => s.toObject())
        resolve(subscriptions)
      })
    })
  }

  queryActiveSessionsForAddress (address) {
    return new Promise((resolve, reject) => {
      const client = QueryService.create(SessionQueryServiceClient)

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
  }

  async startActiveSession (address, subscription) {
    const msgStartRequest = new MsgStartRequest([address, subscription.id, subscription.node])
    const msgStartRequestAny = new Any(['/sentinel.session.v1.MsgService/MsgStart', msgStartRequest.serializeBinary()])
    const msgsEndRequestAny = await this.getSessionMsgEndAny(address)
    await this.transactionService.broadcastMessages([...msgsEndRequestAny, msgStartRequestAny], BroadcastMode.BROADCAST_MODE_BLOCK)
    const activeSessions = await this.queryActiveSessionsForAddress(address)

    return activeSessions[0]
  }

  async subscribeToNode (to, deposit) {
    const from = this.accountService.getAddress()
    const coin = new Coin([deposit.denom, 0])
    const msg = new MsgSubscribeToNodeRequest([from, to])
    msg.setDeposit(coin)
    const msgAny = new Any(['/sentinel.subscription.v1.MsgService/MsgSubscribeToNode', msg.serializeBinary()])

    return await this.transactionService.broadcastMessages([msgAny], BroadcastMode.BROADCAST_MODE_BLOCK)
  }

  async getSessionMsgEndAny (address) {
    const sessions = await this.queryActiveSessionsForAddress(address)
    return sessions.map(session => {
      const msg = new MsgEndRequest([address, session.id])
      return new Any(['/sentinel.session.v1.MsgService/MsgEnd', msg.serializeBinary()])
    })
  }

  sendCoins (address) {
    const coin = new Coin([DENOM, '100'])
    const msgSend = new MsgSend([address, 'sent1e7fka52pfqdushfezeg3w6swduklfskzx6vmfu', []])
    msgSend.addAmount(coin)
  // const msgStartRequestAny = new Any(['/cosmos.bank.v1beta1.MsgSend', msgSend.serializeBinary()])
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

  async queryConnectToNode (subscriptionId, keyName, nodeAddress, connectionInfo, wireguardPrivateKey) {
    const { data } = await this.restFetchApi.connect(Number(subscriptionId), keyName, nodeAddress, connectionInfo, [wireguardPrivateKey])
    return data.result
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

  async queryDisconnectFromNode () {
    const { data } = await this.restFetchApi.disconnect()

    return data.result
  }
}

export default SentinelService
