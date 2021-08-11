import { Any } from '@/main/proto/google/protobuf/any_pb.js'
import { PubKey } from '@/main/proto/cosmos/crypto/secp256k1/keys_pb.js'
import { accountKey, chainId } from '@/shared/constants'
import * as bip39 from 'bip39'
import { QueryAccountRequest } from '@/main/proto/cosmos/auth/v1beta1/query_pb.js'
import { QueryClient as AccountQueryClient } from '@/main/proto/cosmos/auth/v1beta1/query_grpc_pb.js'
import { BaseAccount } from '@/main/proto/cosmos/auth/v1beta1/auth_pb.js'
import { Cosmos } from '@cosmostation/cosmosjs'
import { lcdHost } from '@/main/api/urls'
import RestFetchApi from '@/main/api/RestFetchApi'
import QueryServiceFactory from '@/main/api/QueryServiceFactory'

class AccountService {
  constructor () {
    this.client = new Cosmos(lcdHost, chainId)
    this.client.setPath("m/44'/118'/0'/0/0")
    this.restFetchApi = new RestFetchApi()
  }

  async queryKeyByName (name) {
    const { data } = await this.restFetchApi.getKey(name)
    return data.result
  }

  async queryAccount (address) {
    return new Promise((resolve, reject) => {
      const request = new QueryAccountRequest([address])
      const client = QueryServiceFactory.create(AccountQueryClient)

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

  getAddress (mnemonic = accountKey.mnemonic) {
    return this.client.getAddress(mnemonic)
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

  async queryNewKey (name, mnemonic = this.getRandomMnemonic()) {
    const { data } = await this.restFetchApi.createKey(name, mnemonic)
    return data.result
  }
}

export default AccountService
