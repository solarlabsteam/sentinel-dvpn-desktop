import { Any } from '@/main/proto/google/protobuf/any_pb.js'
import { PubKey } from '@/main/proto/cosmos/crypto/secp256k1/keys_pb.js'
import { DVPN_KEY_NAME } from '@/main/common/constants'
import { QueryAccountRequest } from '@/main/proto/cosmos/auth/v1beta1/query_pb.js'
import { QueryClient as AccountQueryClient } from '@/main/proto/cosmos/auth/v1beta1/query_grpc_pb.js'
import { BaseAccount } from '@/main/proto/cosmos/auth/v1beta1/auth_pb.js'
import { QueryAllBalancesRequest } from '@/main/proto/cosmos/bank/v1beta1/query_pb.js'
import { QueryClient as BankQueryClient } from '@/main/proto/cosmos/bank/v1beta1/query_grpc_pb.js'
import KeyApi from '@/main/api/rest/KeyApi'
import QueryService from '@/main/services/QueryService'
import { getters } from '@/main/store/store'

class AccountService {
  constructor () {
    this.restKeyApi = new KeyApi()
  }

  async queryKeyByName (name, password) {
    const storedKey = getters.getKeyByName(name)

    if (storedKey) {
      return storedKey
    }

    // const { data } = await this.restKeyApi.getKey(name, password)
    //
    // return data.result
  }

  async queryAccount (address) {
    return new Promise((resolve, reject) => {
      const request = new QueryAccountRequest([address])
      const client = QueryService.create(AccountQueryClient)

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
    const key = await this.queryKeyByName(DVPN_KEY_NAME)
    const pubKey = new PubKey()
    pubKey.setKey(Buffer.from(key.pub_key, 'base64'))
    return new Any([
      '/cosmos.crypto.secp256k1.PubKey',
      pubKey.serializeBinary()
    ])
  }

  async queryBalances () {
    const key = await this.queryKeyByName(DVPN_KEY_NAME)

    return new Promise((resolve, reject) => {
      const request = new QueryAllBalancesRequest([key.addressBech32])
      const client = QueryService.create(BankQueryClient)

      client.allBalances(request, (err, response) => {
        if (err) {
          console.log(err)
          reject(err)
          return
        }

        const balances = response.getBalancesList().map(coin => coin.toObject())
        resolve(balances)
      })
    })
  }
}

export default AccountService
