const accountKey = {
  name: 'test_sentinel_key',
  mnemonic: 'join never syrup early any police ready chapter marine play main shine expose tube congress assault crucial senior stove abuse forum dolphin order elder'
}

const DENOM = 'udvpn'

const urls = {
  startSessionURL: '/sentinel.session.v1.MsgService/MsgStart',
  endSessionURL: '/sentinel.session.v1.MsgService/MsgEnd',
  subscribeToNodeURL: '/sentinel.subscription.v1.MsgService/MsgSubscribeToNode'
}

export { accountKey, DENOM, urls }
