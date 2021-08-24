import axios from 'axios'
import https from 'https'

class RemoteNodeApi {
  constructor (baseURL) {
    this.provider = axios.create({
      baseURL,
      timeout: 3000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
  }

  signSession (from, sessionId, data) {
    return this.provider.post(`/accounts/${from}/sessions/${sessionId}`, data)
  }

  queryNodeStatus () {
    return this.provider.get('/status')
  }
}

export default RemoteNodeApi
