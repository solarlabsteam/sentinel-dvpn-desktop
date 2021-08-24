import { QueryQuotaRequest, QuerySubscriptionRequest, QuerySubscriptionsForNodeRequest, QuerySubscriptionsForAddressRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import QueryService from '@/main/services/QueryService'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import { DVPN_KEY_NAME } from '@/main/common/constants'
import { MsgSubscribeToNodeRequest } from '@/main/proto/sentinel/subscription/v1/msg_pb.js'
import AccountService from '@/main/services/AccountService'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import TransactionService from '@/main/services/TransactionService'

class SubscriptionService {
  constructor () {
    this.client = QueryService.create(SubscriptionQueryServiceClient)
    this.accountService = new AccountService()
    this.transactionService = new TransactionService()
  }

  queryQuota (id, address) {
    return new Promise((resolve, reject) => {
      const request = new QueryQuotaRequest([id, address])

      this.client.queryQuota(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const { quota } = response.toObject()
        const bytesPerGb = Math.pow(1000, 3)
        const allocatedGb = (Number(quota.allocated) / bytesPerGb)
        const consumedGb = (Number(quota.consumed) / bytesPerGb)
        const balanceGb = allocatedGb - consumedGb

        quota.allocatedGb = allocatedGb.toFixed(2)
        quota.consumedGb = consumedGb.toFixed(2)
        quota.balanceGb = balanceGb.toFixed(2)
        resolve(quota)
      })
    })
  }

  querySubscription (id) {
    return new Promise((resolve, reject) => {
      const request = new QuerySubscriptionRequest([id])

      this.client.querySubscription(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const { subscription } = response.toObject()
        resolve(subscription)
      })
    })
  }

  querySubscriptionsForNode (address, account) {
    return new Promise((resolve, reject) => {
      const request = new QuerySubscriptionsForNodeRequest([address])

      this.client.querySubscriptionsForNode(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const subscriptions = response.getSubscriptionsList().map(s => s.toObject()).filter(s => s.owner === account)
        resolve(subscriptions)
      })
    })
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

  async subscribeToNode (to, deposit) {
    const key = await this.accountService.queryKeyByName(DVPN_KEY_NAME)
    const coin = new Coin([deposit.denom, deposit.amount])
    const msg = new MsgSubscribeToNodeRequest([key.addressBech32, to])
    msg.setDeposit(coin)
    const msgAny = new Any(['/sentinel.subscription.v1.MsgService/MsgSubscribeToNode', msg.serializeBinary()])

    return await this.transactionService.broadcastMessages([msgAny], BroadcastMode.BROADCAST_MODE_BLOCK)
  }

  // sendCoins (address) {
  //   const coin = new Coin([DENOM, '100'])
  //   const msgSend = new MsgSend([address, 'sent1e7fka52pfqdushfezeg3w6swduklfskzx6vmfu', []])
  //   msgSend.addAmount(coin)
  //   const msgStartRequestAny = new Any(['/cosmos.bank.v1beta1.MsgSend', msgSend.serializeBinary()])
  // }
}

export default SubscriptionService
