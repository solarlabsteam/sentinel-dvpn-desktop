import { accountKey } from '@/shared/constants'
import { Cosmos } from '@cosmostation/cosmosjs'
import { TxBody, Fee, SignerInfo, ModeInfo, AuthInfo, SignDoc, TxRaw } from '@/main/proto/cosmos/tx/v1beta1/tx_pb.js'
import { Coin } from '@/main/proto/cosmos/base/v1beta1/coin_pb.js'
import { SignMode } from '@/main/proto/cosmos/tx/signing/v1beta1/signing_pb.js'
import AccountService from '@/main/sentinel/AccountService'

const CosmosService = {}

CosmosService.lcdUrl = 'http://lcd-sentinel-app.cosmostation.io'
CosmosService.chainId = 'sentinelhub-2'
CosmosService.path = "m/44'/118'/0'/0/0"

CosmosService.client = new Cosmos(CosmosService.lcdUrl, CosmosService.chainId)
CosmosService.client.setPath(CosmosService.path)

CosmosService.getAddress = (mnemonic = accountKey.mnemonic) => {
  return CosmosService.client.getAddress(mnemonic)
}

CosmosService.getTxBody = (messages) => {
  const txBody = new TxBody()
  txBody.setMessagesList(messages)
  txBody.setMemo('')

  return txBody
}

CosmosService.getFeeValue = () => {
  const amount = new Coin(['udvpn', '10000'])
  const fee = new Fee([[], 100000])
  fee.addAmount(amount)

  return fee
}

CosmosService.getSignerInfo = async () => {
  const address = CosmosService.getAddress()
  const account = await AccountService.queryAccount(address)

  const pubKey = await AccountService.getPubKeyAny()
  const single = new ModeInfo.Single([SignMode.SIGN_MODE_DIRECT])
  const modeInfo = new ModeInfo()
  modeInfo.setSingle(single)

  const info = new SignerInfo()
  info.setPublicKey(pubKey)
  info.setModeInfo(modeInfo)
  info.setSequence(account.sequence)
  return info
}

CosmosService.getAuthInfo = async () => {
  const signerInfo = await CosmosService.getSignerInfo()
  const fee = CosmosService.getFeeValue()
  const authInfo = new AuthInfo()
  authInfo.setSignerInfosList([signerInfo])
  authInfo.setFee(fee)

  return authInfo
}

CosmosService.getTxRaw = async (txBody, authInfo, chainId, accountNumber) => {
  const signDoc = new SignDoc([txBody.serializeBinary(), authInfo.serializeBinary(), chainId, accountNumber])
  const signBytes = await AccountService.querySignedBytes(signDoc.serializeBinary())
  return new TxRaw([txBody.serializeBinary(), authInfo.serializeBinary(), [signBytes.signature]])
}

CosmosService.getSignedRequest = async (messages) => {
  const txBody = CosmosService.getTxBody(messages)
  const authInfo = await CosmosService.getAuthInfo()
  const address = CosmosService.getAddress()
  const account = await AccountService.queryAccount(address)
  return await CosmosService.getTxRaw(txBody, authInfo, CosmosService.chainId, account.accountNumber)
}

export default CosmosService
