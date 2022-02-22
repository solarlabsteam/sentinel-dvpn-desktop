import { Wg } from 'wireguard-wrapper'
import DvpnApi from '@/main/api/rest/DvpnApi'
import RemoteNodeApi from '@/main/api/RemoteNodeApi'

class ConnectionService {
  constructor () {
    this.restDvpnApi = new DvpnApi()
  }

  async queryConnectionData (nodeRemoteHost, address, sessionId, signature) {
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
