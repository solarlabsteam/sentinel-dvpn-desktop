import { QueryQuotaRequest, QuerySubscriptionRequest, QuerySubscriptionsForNodeRequest, QuerySubscriptionsForAddressRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import Client from '@/main/services/CustomClient'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import { DVPN_KEY_NAME } from '@/shared/constants'
import { MsgSubscribeToNodeRequest, MsgUpdateQuotaRequest, MsgAddQuotaRequest } from '@/main/proto/sentinel/subscription/v1/msg_pb.js'
import AccountService from '@/main/services/AccountService'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import TransactionService from '@/main/services/TransactionService'

class SubscriptionService {
  constructor () {
    this.client = new Client(SubscriptionQueryServiceClient)
    this.accountService = new AccountService()
    this.transactionService = new TransactionService()
  }

  async queryQuota (id, address) {
    const request = new QueryQuotaRequest([id, address])
    const response = await this.client.call('queryQuota', request)
    const { quota } = response.toObject()
    const bytesPerGb = Math.pow(1000, 3)
    console.log('consumed: ', quota.consumed)
    console.log('allocated: ', quota.allocated)
    const allocatedGb = (Number(quota.allocated) / bytesPerGb)
    const consumedGb = (Number(quota.consumed) / bytesPerGb)
    const balanceGb = allocatedGb - consumedGb

    quota.allocatedGb = allocatedGb.toFixed(2)
    quota.consumedGb = consumedGb.toFixed(2)
    quota.balanceGb = balanceGb.toFixed(2)

    return quota
  }

  async updateQuota (node, address, subscription, bytes) {
    const msg = new MsgUpdateQuotaRequest([subscription.owner, subscription.id, address, bytes])
    const msgAny = new Any(['/sentinel.subscription.v1.MsgService/MsgUpdateQuota', msg.serializeBinary()])

    return await this.transactionService.broadcastMessages([msgAny], BroadcastMode.BROADCAST_MODE_BLOCK)
  }

  async addQuota (node, address, subscription, bytes) {
    const msg = new MsgAddQuotaRequest([subscription.owner, subscription.id, address, bytes])
    const msgAny = new Any(['/sentinel.subscription.v1.MsgService/MsgAddQuota', msg.serializeBinary()])

    return await this.transactionService.broadcastMessages([msgAny], BroadcastMode.BROADCAST_MODE_BLOCK)
  }

  async querySubscription (id) {
    const request = new QuerySubscriptionRequest([id])
    const response = await this.client.call('querySubscription', request)

    const { subscription } = response.toObject()
    return subscription
  }

  async querySubscriptionsForNode (address, account) {
    const request = new QuerySubscriptionsForNodeRequest([address])
    const response = await this.client.call('querySubscriptionsForNode', request)

    return response.getSubscriptionsList().map(s => s.toObject()).filter(s => s.owner === account)
  }

  async querySubscriptionsForAddress (address) {
    const request = new QuerySubscriptionsForAddressRequest([address, Status.STATUS_ACTIVE])
    const response = await this.client.call('querySubscriptionsForAddress', request)

    return response.getSubscriptionsList().map(s => s.toObject())
  }

  async querySubscriptionForAddress (address, node) {
    const subscriptions = await this.querySubscriptionsForAddress(address)
    return subscriptions
      .filter(s => s.node === node)
      .pop()
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
