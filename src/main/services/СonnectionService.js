import uint64be from 'uint64be'
import { Wg } from 'wireguard-wrapper'
import SignService from '@/main/services/SignService'
import DvpnApi from '@/main/api/rest/DvpnApi'
import RemoteNodeApi from '@/main/api/RemoteNodeApi'

class ConnectionService {
  constructor () {
    this.signService = new SignService()
    this.restDvpnApi = new DvpnApi()
  }

  async queryConnectionData (nodeRemoteHost, address, sessionId) {
    const encodedBuffer = uint64be.encode(sessionId)
    const { signature } = await this.signService.querySignedBytes(Array.from(encodedBuffer))
    const privateKey = await Wg.genkey()
    const publicKey = await Wg.pubkey(privateKey)

    const api = new RemoteNodeApi(nodeRemoteHost)
    const result = await api.signSession(address, sessionId, {
      key: publicKey,
      signature
    })

    return {
      ...result.data,
      privateKey
    }
  }

  async queryConnectToNode (subscriptionId, keyName, nodeAddress, connectionInfo, wireguardPrivateKey, resolvers) {
    const { data } = await this.restDvpnApi.connect(Number(subscriptionId), keyName, nodeAddress, connectionInfo, [wireguardPrivateKey], resolvers)
    return data.result
  }

  async queryDisconnectFromNode () {
    const { data } = await this.restDvpnApi.disconnect()

    return data.result
  }

  async queryConnectionStatus () {
    const { data } = await this.restDvpnApi.queryStatus()

    return data.result
  }
}

export default ConnectionService
