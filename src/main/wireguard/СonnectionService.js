import axios from 'axios'
import uint64be from 'uint64be'
import SignService from '@/main/sentinel/SignService'
import * as https from 'https'
import { Wg } from 'wireguard-wrapper'

class ConnectionService {
  constructor () {
    this.provider = axios.create({
      httpAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })

    this.signService = new SignService()
  }

  async queryConnectionData (nodeRemoteHost, address, sessionId) {
    const encodedBuffer = uint64be.encode(sessionId)
    const { signature } = await this.signService.querySignedBytes(Array.from(encodedBuffer))
    const privateKey = await Wg.genkey()
    const publicKey = await Wg.pubkey(privateKey)

    try {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      const result = await this.provider.post(`${nodeRemoteHost}/accounts/${address}/sessions/${sessionId}`, {
        key: publicKey,
        signature
      })
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'

      return {
        ...result.data,
        privateKey
      }
    } finally {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'
    }
  }
}

export default ConnectionService
