const accountKey = {
  address: '1f4afb928241b9e1815558baf041ac95e7eac341',
  name: 'test_sentinel_key',
  pubKey: '02041ff9e592b1fdcae692c6c1e0eb2abe33bbbbd703b7e1cac5b8be91e0d78b17',
  mnemonic: 'join never syrup early any police ready chapter marine play main shine expose tube congress assault crucial senior stove abuse forum dolphin order elder'
}

const DENOM = 'udvpn'

const urls = {
  startSessionURL: '/sentinel.session.v1.MsgService/MsgStart',
  stopSessionURL: '/sentinel.session.v1.MsgService/MsgEnd',
  subscribeToNodeURL: '/sentinel.subscription.v1.MsgService/MsgSubscribeToNode'
}

export { accountKey, DENOM, urls }
