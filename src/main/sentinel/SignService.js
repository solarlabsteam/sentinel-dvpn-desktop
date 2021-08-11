import { accountKey, chainId } from '@/shared/constants'
import { TxBody, Fee, SignerInfo, ModeInfo, AuthInfo, SignDoc, TxRaw } from '@/main/proto/cosmos/tx/v1beta1/tx_pb.js'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { SignMode } from '@/main/proto/cosmos/tx/signing/v1beta1/signing_pb.js'
import AccountService from '@/main/sentinel/AccountService'
import RestFetchApi from '@/main/api/RestFetchApi'

class SignService {
  constructor () {
    this.accountService = new AccountService()
    this.restFetchApi = new RestFetchApi()
  }

  getFeeValue () {
    const amount = new Coin(['udvpn', '10000'])
    const fee = new Fee([[], 100000])
    fee.addAmount(amount)

    return fee
  }

  getTxBody (messages) {
    const txBody = new TxBody()
    txBody.setMessagesList(messages)
    txBody.setMemo('')

    return txBody
  }

  async getSignerInfo () {
    const address = this.accountService.getAddress()
    const account = await this.accountService.queryAccount(address)

    const pubKey = await this.accountService.getPubKeyAny()
    const single = new ModeInfo.Single([SignMode.SIGN_MODE_DIRECT])
    const modeInfo = new ModeInfo()
    modeInfo.setSingle(single)

    const info = new SignerInfo()
    info.setPublicKey(pubKey)
    info.setModeInfo(modeInfo)
    info.setSequence(account.sequence)
    return info
  }

  async getAuthInfo () {
    const signerInfo = await this.getSignerInfo()
    const fee = this.getFeeValue()
    const authInfo = new AuthInfo()
    authInfo.setSignerInfosList([signerInfo])
    authInfo.setFee(fee)

    return authInfo
  }

  async getTxRaw (txBody, authInfo, chainId, accountNumber) {
    const signDoc = new SignDoc([txBody.serializeBinary(), authInfo.serializeBinary(), chainId, accountNumber])
    const signBytes = await this.querySignedBytes(signDoc.serializeBinary())
    return new TxRaw([txBody.serializeBinary(), authInfo.serializeBinary(), [signBytes.signature]])
  }

  async getSignedRequest (messages) {
    const txBody = this.getTxBody(messages)
    const authInfo = await this.getAuthInfo()
    const address = this.accountService.getAddress()
    const account = await this.accountService.queryAccount(address)
    return await this.getTxRaw(txBody, authInfo, chainId, account.accountNumber)
  }

  async querySignedBytes (bytes) {
    const { data } = await this.restFetchApi.sign(accountKey.name, bytes)
    return data.result
  }
}

export default SignService
