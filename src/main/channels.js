const QUERY_NODE_LIST = 'QUERY_NODE_LIST'
const QUERY_NODE = 'QUERY_NODE'
const QUERY_SUBSCRIBED_NODE_LIST = 'QUERY_SUBSCRIBED_NODE_LIST'

const CONNECT_TO_NODE = 'CONNECT_TO_NODE'
const DISCONNECT = 'DISCONNECT'
const QUERY_CONNECTION_STATUS = 'QUERY_CONNECTION_STATUS'
const QUERY_SERVICE_SERVER = 'QUERY_SERVICE_SERVER'

const QUERY_SUBSCRIPTION_LIST = 'QUERY_SUBSCRIPTION_LIST'
const SUBSCRIBE_TO_NODE = 'SUBSCRIBE_TO_NODE'
const QUERY_QUOTA = 'QUERY_QUOTA'
const QUERY_CHECKED_QUOTA = 'QUERY_CHECKED_QUOTA'
const QUERY_SUBSCRIPTION_FOR_NODE = 'QUERY_SUBSCRIPTION_FOR_NODE'
const QUERY_CHECKED_SUBSCRIPTION_FOR_NODE = 'QUERY_CHECKED_SUBSCRIPTION_FOR_NODE'

const QUERY_USER = 'QUERY_USER'
const ADD_ACCOUNT = 'ADD_ACCOUNT'

const GET_STORE_VALUE = 'GET_STORE_VALUE'
const SET_STORE_VALUE = 'SET_STORE_VALUE'
const GET_STORE_KEY = 'GET_STORE_KEY'

const QUERY_BALANCES = 'QUERY_BALANCES'

export default [QUERY_NODE_LIST, QUERY_SUBSCRIPTION_LIST, CONNECT_TO_NODE, DISCONNECT, SUBSCRIBE_TO_NODE,
  QUERY_QUOTA, QUERY_SUBSCRIPTION_FOR_NODE, QUERY_NODE, GET_STORE_VALUE, SET_STORE_VALUE, QUERY_USER, ADD_ACCOUNT,
  QUERY_CONNECTION_STATUS, QUERY_SERVICE_SERVER, QUERY_BALANCES, QUERY_SUBSCRIBED_NODE_LIST, QUERY_CHECKED_SUBSCRIPTION_FOR_NODE, QUERY_CHECKED_QUOTA,
  GET_STORE_KEY
]
