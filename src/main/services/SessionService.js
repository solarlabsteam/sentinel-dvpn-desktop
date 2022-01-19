import Client from '@/main/services/CustomClient'
import { QueryServiceClient as SessionQueryServiceClient } from '@/main/proto/sentinel/session/v1/querier_grpc_pb'
import { QuerySessionsForAddressRequest } from '@/main/proto/sentinel/session/v1/querier_pb'
import { MsgStartRequest, MsgEndRequest } from '@/main/proto/sentinel/session/v1/msg_pb'
import { Any } from '@/main/proto/google/protobuf/any_pb'
import { BroadcastMode } from '@/main/proto/cosmos/tx/v1beta1/service_pb'
import { Status } from '@/main/proto/sentinel/types/v1/status_pb'
import TransactionService from '@/main/services/TransactionService'

class SessionService {
  constructor () {
    this.transactionService = new TransactionService()
  }

  async queryActiveSessionsForAddress (address) {
    const client = new Client(SessionQueryServiceClient)
    const request = new QuerySessionsForAddressRequest([address, Status.STATUS_ACTIVE])

    const response = await client.call('querySessionsForAddress', request)
    return response.getSessionsList().map(session => session.toObject())
  }

  async startActiveSession (address, subscription) {
    const msgStartRequest = new MsgStartRequest([address, subscription.id, subscription.node])
    const msgStartRequestAny = new Any(['/sentinel.session.v1.MsgService/MsgStart', msgStartRequest.serializeBinary()])
    const msgsEndRequestAny = await this.getSessionMsgEndAny(address)
    await this.transactionService.broadcastMessages([...msgsEndRequestAny, msgStartRequestAny], BroadcastMode.BROADCAST_MODE_BLOCK)
    const activeSessions = await this.queryActiveSessionsForAddress(address)

    return activeSessions[0]
  }

  async getSessionMsgEndAny (address) {
    const sessions = await this.queryActiveSessionsForAddress(address)
    return sessions.map(session => {
      const msg = new MsgEndRequest([address, session.id])
      return new Any(['/sentinel.session.v1.MsgService/MsgEnd', msg.serializeBinary()])
    })
  }
}

export default SessionService
