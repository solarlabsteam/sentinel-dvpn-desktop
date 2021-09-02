import axios from 'axios'
import { DVPN_KEY_NAME } from '@/main/common/constants'
import store, { getters } from '@/main/store/store'

class DvpnApi {
  constructor () {
    const port = store.get('dvpnRestServerPort')
    this.provider = axios.create({
      timeout: 3000,
      baseURL: `http://127.0.0.1:${port}/api/v1`
    })
    const key = getters.getKeyByName(DVPN_KEY_NAME)
    this.provider.interceptors.request.use(config => {
      config.data = {
        password: key && key.password,
        backend: 'file',
        ...config.data
      }

      return config
    })
  }

  connect (id, from, to, info, keys, resolvers) {
    return this.provider.post('/Service.Connect', {
      id, from, to, info, keys, resolvers
    })
  }

  disconnect () {
    return this.provider.post('/Service.Disconnect')
  }

  queryStatus () {
    return this.provider.post('/Service.GetStatus')
  }
}

export default DvpnApi
