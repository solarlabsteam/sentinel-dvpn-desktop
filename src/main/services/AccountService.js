import { Any } from '@/main/proto/google/protobuf/any_pb.js'
import { PubKey } from '@/main/proto/cosmos/crypto/secp256k1/keys_pb.js'
import { DENOM, DVPN_KEY_NAME, defaultTransactionFee } from '@/shared/constants'
import { QueryAccountRequest } from '@/main/proto/cosmos/auth/v1beta1/query_pb.js'
import { QueryClient as AccountQueryClient } from '@/main/proto/cosmos/auth/v1beta1/query_grpc_pb.js'
import { BaseAccount } from '@/main/proto/cosmos/auth/v1beta1/auth_pb.js'
import { QueryAllBalancesRequest } from '@/main/proto/cosmos/bank/v1beta1/query_pb.js'
import { QueryClient as BankQueryClient } from '@/main/proto/cosmos/bank/v1beta1/query_grpc_pb.js'
import Client from '@/main/services/CustomClient'
import { getters } from '@/main/store/store'

class AccountService {
  async queryKeyByName () {
    const storedKey = getters.getUserKey()

    if (storedKey) {
      return storedKey
    }
  }

  async queryAccount (address) {
    const request = new QueryAccountRequest([address])
    const client = new Client(AccountQueryClient)

    const response = await client.call('account', request)
    const accountAny = response.getAccount()

    return accountAny.unpack(BaseAccount.deserializeBinary, accountAny.getTypeName()).toObject()
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

    const request = new QueryAllBalancesRequest([key.addressBech32])
    const client = new Client(BankQueryClient)

    const response = await client.call('allBalances', request)
    return response.getBalancesList().map(coin => coin.toObject())
  }

  async isBalanceEnoughForTransaction () {
    const balances = await this.queryBalances()
    return balances.some(b => {
      return b.denom === DENOM && Number(b.amount) > defaultTransactionFee
    })
  }
}

export default AccountService
