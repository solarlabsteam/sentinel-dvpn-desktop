import axios from 'axios'
import uint64be from 'uint64be'
import AccountService from '@/main/sentinel/AccountService'
import * as https from 'https'
import { Wg } from 'wireguard-wrapper'

class ConnectionService {
  constructor () {
    this.provider = axios.create({
      httpAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
  }

  async queryConnectionData (nodeRemoteHost, address, sessionId) {
    const encodedBuffer = uint64be.encode(sessionId)
    const { signature } = await AccountService.querySignedBytes(encodedBuffer)
    const privateKey = await Wg.genkey()
    const publicKey = await Wg.pubkey(privateKey)
    let data

    try {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      const result = await axios.post(`${nodeRemoteHost}/accounts/${address}/sessions/${sessionId}`, {
        key: publicKey,
        signature
      })

      data = {
        ...result.data,
        privateKey
      }
    } catch (e) {
      console.log(e)
      console.log(e, e.response.data)
    } finally {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'
    }

    return data
  }
}

export default new ConnectionService()
