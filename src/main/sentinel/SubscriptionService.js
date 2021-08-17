import { QueryQuotaRequest, QuerySubscriptionRequest, QuerySubscriptionsForNodeRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import QueryService from '@/main/api/QueryService'

class SubscriptionService {
  constructor () {
    this.client = QueryService.create(SubscriptionQueryServiceClient)
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
        const kbsInGb = Math.pow(1024, 3)
        const allocatedGb = (Number(quota.allocated) / kbsInGb)
        const consumedGb = (Number(quota.consumed) / kbsInGb)
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
}

export default SubscriptionService
