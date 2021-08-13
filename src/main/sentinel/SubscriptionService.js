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
        quota.balance = Number(quota.allocated) - Number(quota.consumed)
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
