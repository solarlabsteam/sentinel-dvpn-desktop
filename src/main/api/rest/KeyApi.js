import axios from 'axios'
import { safeStorage } from 'electron'
import store, { getters } from '@/main/store/store'

const bech32 = require('bech32')

class KeyApi {
  constructor () {
    const port = store.get('keyringRestServerPort')
    this.provider = axios.create({
      baseURL: `http://127.0.0.1:${port}/api/v1`
    })
    this.provider.interceptors.request.use(config => {
      const key = getters.getUserKey()
      config.data = {
        backend: 'file',
        password: key && safeStorage.decryptString(Buffer.from(key.password, 'base64')),
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
        data = JSON.parse(data)

        if (!data.success) {
          return data
        }

        this.addAccountBech32(data)
        data.result = {
          ...data.result,
          mnemonic: requestData.mnemonic,
          password: safeStorage.encryptString(requestData.password).toString('base64')
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
