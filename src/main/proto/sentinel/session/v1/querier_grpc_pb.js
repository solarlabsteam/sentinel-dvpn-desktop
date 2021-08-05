// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_session_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')
var sentinel_session_v1_session_pb = require('./session_pb.js')
var sentinel_session_v1_params_pb = require('./params_pb.js')

function serialize_sentinel_session_v1_QueryParamsRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QueryParamsRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QueryParamsResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QueryParamsResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForAddressRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForAddressRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForAddressRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForAddressRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForAddressRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForAddressResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForAddressResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForAddressResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForAddressResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForAddressResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForNodeRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForNodeRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForNodeRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForNodeResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForNodeResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForNodeResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForSubscriptionRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForSubscriptionRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForSubscriptionRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsForSubscriptionResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsForSubscriptionResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsForSubscriptionResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsRequest (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_QuerySessionsResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_querier_pb.QuerySessionsResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.QuerySessionsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_QuerySessionsResponse (buffer_arg) {
  return sentinel_session_v1_querier_pb.QuerySessionsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  querySessions: {
    path: '/sentinel.session.v1.QueryService/QuerySessions',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QuerySessionsRequest,
    responseType: sentinel_session_v1_querier_pb.QuerySessionsResponse,
    requestSerialize: serialize_sentinel_session_v1_QuerySessionsRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QuerySessionsRequest,
    responseSerialize: serialize_sentinel_session_v1_QuerySessionsResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QuerySessionsResponse
  },
  querySessionsForNode: {
    path: '/sentinel.session.v1.QueryService/QuerySessionsForNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QuerySessionsForNodeRequest,
    responseType: sentinel_session_v1_querier_pb.QuerySessionsForNodeResponse,
    requestSerialize: serialize_sentinel_session_v1_QuerySessionsForNodeRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QuerySessionsForNodeRequest,
    responseSerialize: serialize_sentinel_session_v1_QuerySessionsForNodeResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QuerySessionsForNodeResponse
  },
  querySessionsForSubscription: {
    path: '/sentinel.session.v1.QueryService/QuerySessionsForSubscription',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionRequest,
    responseType: sentinel_session_v1_querier_pb.QuerySessionsForSubscriptionResponse,
    requestSerialize: serialize_sentinel_session_v1_QuerySessionsForSubscriptionRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QuerySessionsForSubscriptionRequest,
    responseSerialize: serialize_sentinel_session_v1_QuerySessionsForSubscriptionResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QuerySessionsForSubscriptionResponse
  },
  querySessionsForAddress: {
    path: '/sentinel.session.v1.QueryService/QuerySessionsForAddress',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QuerySessionsForAddressRequest,
    responseType: sentinel_session_v1_querier_pb.QuerySessionsForAddressResponse,
    requestSerialize: serialize_sentinel_session_v1_QuerySessionsForAddressRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QuerySessionsForAddressRequest,
    responseSerialize: serialize_sentinel_session_v1_QuerySessionsForAddressResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QuerySessionsForAddressResponse
  },
  querySession: {
    path: '/sentinel.session.v1.QueryService/QuerySession',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QuerySessionRequest,
    responseType: sentinel_session_v1_querier_pb.QuerySessionResponse,
    requestSerialize: serialize_sentinel_session_v1_QuerySessionRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QuerySessionRequest,
    responseSerialize: serialize_sentinel_session_v1_QuerySessionResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QuerySessionResponse
  },
  queryParams: {
    path: '/sentinel.session.v1.QueryService/QueryParams',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_querier_pb.QueryParamsRequest,
    responseType: sentinel_session_v1_querier_pb.QueryParamsResponse,
    requestSerialize: serialize_sentinel_session_v1_QueryParamsRequest,
    requestDeserialize: deserialize_sentinel_session_v1_QueryParamsRequest,
    responseSerialize: serialize_sentinel_session_v1_QueryParamsResponse,
    responseDeserialize: deserialize_sentinel_session_v1_QueryParamsResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
