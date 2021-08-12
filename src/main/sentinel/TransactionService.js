import SignService from '@/main/sentinel/SignService'
import QueryService from '@/main/api/QueryService'
import { BroadcastTxRequest } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import { ServiceClient as TxServiceClient } from '@/main/proto/cosmos/tx/v1beta1/service_grpc_pb'

class TransactionService {
  constructor () {
    this.signService = new SignService()
  }

  async broadcastMessages (messages, mode) {
    const signedTxBytes = await this.signService.getSignedRequest(messages)
    return await this.broadcastTx(signedTxBytes.serializeBinary(), mode)
  }

  broadcastTx (txBytes, mode) {
    return new Promise((resolve, reject) => {
      const client = QueryService.create(TxServiceClient)
      const request = new BroadcastTxRequest([txBytes, mode])

      client.broadcastTx(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response.toObject())
      })
    })
  }
}

export default TransactionService
