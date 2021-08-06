import { Any } from '@/main/proto/google/protobuf/any_pb.js'
import { PubKey } from '@/main/proto/cosmos/crypto/secp256k1/keys_pb.js'
import { accountKey } from '@/shared/constants'
import axios from 'axios'
import * as bip39 from 'bip39'
import { QueryAccountRequest } from '@/main/proto/cosmos/auth/v1beta1/query_pb.js'
import { QueryClient as AccountQueryClient } from '@/main/proto/cosmos/auth/v1beta1/query_grpc_pb.js'
import { BaseAccount } from '@/main/proto/cosmos/auth/v1beta1/auth_pb.js'

const grpc = require('@grpc/grpc-js')
const crypto = require('crypto')
const bech32 = require('bech32')

class AccountService {
  async queryKeyByName (name) {
    try {
      const { data } = await axios.get(`http://localhost:9090/api/v1/keys/${name}`, {
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

      return data.result
    } catch (e) {
      console.log(e)
    }
  }

  async queryAccount (address) {
    return new Promise((resolve, reject) => {
      const request = new QueryAccountRequest([address])
      const client = new AccountQueryClient('lcd-sentinel-app.cosmostation.io:9090', grpc.credentials.createInsecure())

      client.account(request, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        const accountAny = response.getAccount()
        resolve(accountAny.unpack(BaseAccount.deserializeBinary, accountAny.getTypeName()).toObject())
      })
    })
  }

  async getPubKeyAny () {
    const key = await this.queryKeyByName(accountKey.name)
    const pubKey = new PubKey()
    pubKey.setKey(Buffer.from(key.pub_key, 'hex'))
    return new Any([
      '/cosmos.crypto.secp256k1.PubKey',
      pubKey.serializeBinary()
    ])
  }

  getRandomMnemonic (strength = 256) {
    return bip39.generateMnemonic(strength)
  }

  async querySignedBytes (bytes) {
    try {
      const { data } = await axios.post('http://localhost:9090/api/v1/keys/test_sentinel_key/sign', bytes)
      return data.result
    } catch (e) {
      console.log(e)
    }
  }

  async queryNewKey (name, mnemonic = this.getRandomMnemonic()) {
    try {
      const { data } = await axios.post('http://localhost:9090/api/v1/keys', {
        name, mnemonic
      })

      return data.result
    } catch (e) {
      console.log(e)
    }
  }
}

export default new AccountService()
