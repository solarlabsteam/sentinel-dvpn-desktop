import axios from 'axios'
import store, { getters } from '@/main/store/store'
import { DVPN_KEY_NAME } from '@/shared/constants'

const bech32 = require('bech32')

class KeyApi {
  constructor () {
    const port = store.get('keyringRestServerPort')
    this.provider = axios.create({
      baseURL: `http://127.0.0.1:${port}/api/v1`
    })
    const key = getters.getKeyByName(DVPN_KEY_NAME)
    this.provider.interceptors.request.use(config => {
      config.data = {
        backend: 'test',
        password: key && key.password,
        ...config.data
      }
      return config
    })
  }

  async restore (mnemonic, name, password) {
    return await this.createKey({ mnemonic, name, password })
  }

  async sign (name, bytes) {
    return await this.provider.post('/Keys.SignBytes', {
      name, bytes
    })
  }

  async createKey (requestData = {}) {
    const { coinType, ...data } = requestData
    return await this.provider.post('/Keys.AddKey', {
      coin_type: coinType,
      ...data
    }, {
      transformResponse: [data => {
        try {
          data = JSON.parse(data)

          if (!data.success) {
            return data
          }

          this.addAccountBech32(data)
          data.result = {
            ...data.result,
            mnemonic: requestData.mnemonic,
            password: requestData.password
          }
        } catch (e) {
          console.log(e)
        }

        return data
      }]
    })
  }

  async getKey (name, password) {
    return await this.provider.post('/Keys.GetKey', {
      name, password
    }, {
      transformResponse: [data => {
        try {
          data = JSON.parse(data)

          if (!data.success) {
            return data
          }

          this.addAccountBech32(data)
        } catch (e) {
          console.log(e)
        }

        return data
      }]
    })
  }

  addAccountBech32 (data) {
    const bech32Words = bech32.toWords(Buffer.from(data.result.address, 'base64'))
    data.result.addressBech32 = bech32.encode('sent', bech32Words)
  }
}

export default KeyApi
