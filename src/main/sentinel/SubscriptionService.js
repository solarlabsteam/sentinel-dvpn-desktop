import { QueryQuotaRequest, QuerySubscriptionRequest } from '@/main/proto/sentinel/subscription/v1/querier_pb'
import { QueryServiceClient as SubscriptionQueryServiceClient } from '@/main/proto/sentinel/subscription/v1/querier_grpc_pb'
import QueryService from '@/main/api/QueryService'

class SubscriptionService {
  queryQuota (id, address) {
    return new Promise((resolve, reject) => {
      const request = new QueryQuotaRequest([id, address])
      const client = QueryService.create(SubscriptionQueryServiceClient)

      client.queryQuota(request, (err, response) => {
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
      const client = QueryService.create(SubscriptionQueryServiceClient)

      client.querySubscription(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const { subscription } = response.toObject()
        resolve(subscription)
      })
    })
  }
}

export default SubscriptionService
