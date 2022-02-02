import https from 'https'
import axios from 'axios'

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
    return this.provider.post(`/accounts/${from}/sessions/${sessionId}`, data, {
      timeout: null
    })
  }

  queryNodeStatus () {
    return this.provider.get('/status')
  }
}

export default RemoteNodeApi
