import { Any } from '@/main/proto/google/protobuf/any_pb.js'
import { PubKey } from '@/main/proto/cosmos/crypto/secp256k1/keys_pb.js'
import { accountKey } from '@/shared/constants'

class KeysService {
  getPubKeyAny () {
    const pubKey = new PubKey()
    pubKey.setKey(Buffer.from(accountKey.pubKey, 'hex'))
    return new Any([
      '/cosmos.crypto.secp256k1.PubKey',
      pubKey.serializeBinary()
    ])
  }
}

export default new KeysService()
