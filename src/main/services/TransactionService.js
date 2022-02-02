import getUnixTime from 'date-fns/getUnixTime'
import SignService from '@/main/services/SignService'
import Client from '@/main/services/CustomClient'
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

  async broadcastTx (txBytes, mode) {
    const request = new BroadcastTxRequest([txBytes, mode])
    const client = new Client(TxServiceClient)
    const response = await client.call('broadcastTx', request, { deadline: null, calls: 1 })
    const txResponse = response.getTxResponse().toObject()

    if (!txResponse.timestamp) {
      txResponse.timestamp = getUnixTime(new Date())
    }

    if (txResponse.code !== 0) {
      throw txResponse
    }

    return txResponse
  }
}

export default TransactionService
