import axios from 'axios'

const crypto = require('crypto')
const bech32 = require('bech32')

class RestFetchApi {
  constructor () {
    this.provider = axios.create({
      baseURL: 'http://localhost:9090/api/v1'
    })
  }

  async connect (id, from, to, info, keys) {
    return await this.provider.post('/connect', {
      id, from, to, info, keys, resolvers: ['1.1.1.1', '1.0.0.1']
    })
  }

  async disconnect () {
    return await this.provider.post('/disconnect')
  }

  async sign (name, bytes) {
    return await this.provider.post(`/keys/${name}/sign`, bytes)
  }

  async createKey (name, mnemonic) {
    return await this.provider.post('/keys', {
      name, mnemonic
    })
  }

  async getKey (name) {
    return await this.provider.get(`http://localhost:9090/api/v1/keys/${name}`, {
      transformResponse: [data => {
        try {
          data = JSON.parse(data)
          data.result.pub_keyBase64 = Buffer.from(data.result.pub_key, 'hex').toString('base64')

          const sha256Digest = crypto
            .createHash('sha256')
            .update(data.result.address, 'hex')
            .digest('hex')

          const ripemd160Digest = crypto
            .createHash('ripemd160')
            .update(sha256Digest, 'hex')
            .digest('hex')

          const bech32Words = bech32.toWords(Buffer.from(ripemd160Digest, 'hex'))
          const words = new Uint8Array([...bech32Words])
          data.result.addressBech32 = bech32.encode('sent', words)
        } catch (e) {
          console.log(e)
        }

        return data
      }]
    })
  }
}

export default RestFetchApi
