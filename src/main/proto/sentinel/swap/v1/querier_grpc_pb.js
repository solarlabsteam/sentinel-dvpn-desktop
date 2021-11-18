// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_swap_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_swap_v1_swap_pb = require('./swap_pb.js')
var sentinel_swap_v1_params_pb = require('./params_pb.js')

function serialize_sentinel_swap_v1_QueryParamsRequest (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QueryParamsRequest (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_QueryParamsResponse (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QueryParamsResponse (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_QuerySwapRequest (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QuerySwapRequest)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QuerySwapRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QuerySwapRequest (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QuerySwapRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_QuerySwapResponse (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QuerySwapResponse)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QuerySwapResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QuerySwapResponse (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QuerySwapResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_QuerySwapsRequest (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QuerySwapsRequest)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QuerySwapsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QuerySwapsRequest (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QuerySwapsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_QuerySwapsResponse (arg) {
  if (!(arg instanceof sentinel_swap_v1_querier_pb.QuerySwapsResponse)) {
    throw new Error('Expected argument of type sentinel.swap.v1.QuerySwapsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_QuerySwapsResponse (buffer_arg) {
  return sentinel_swap_v1_querier_pb.QuerySwapsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  querySwaps: {
    path: '/sentinel.swap.v1.QueryService/QuerySwaps',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_swap_v1_querier_pb.QuerySwapsRequest,
    responseType: sentinel_swap_v1_querier_pb.QuerySwapsResponse,
    requestSerialize: serialize_sentinel_swap_v1_QuerySwapsRequest,
    requestDeserialize: deserialize_sentinel_swap_v1_QuerySwapsRequest,
    responseSerialize: serialize_sentinel_swap_v1_QuerySwapsResponse,
    responseDeserialize: deserialize_sentinel_swap_v1_QuerySwapsResponse
  },
  querySwap: {
    path: '/sentinel.swap.v1.QueryService/QuerySwap',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_swap_v1_querier_pb.QuerySwapRequest,
    responseType: sentinel_swap_v1_querier_pb.QuerySwapResponse,
    requestSerialize: serialize_sentinel_swap_v1_QuerySwapRequest,
    requestDeserialize: deserialize_sentinel_swap_v1_QuerySwapRequest,
    responseSerialize: serialize_sentinel_swap_v1_QuerySwapResponse,
    responseDeserialize: deserialize_sentinel_swap_v1_QuerySwapResponse
  },
  queryParams: {
    path: '/sentinel.swap.v1.QueryService/QueryParams',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_swap_v1_querier_pb.QueryParamsRequest,
    responseType: sentinel_swap_v1_querier_pb.QueryParamsResponse,
    requestSerialize: serialize_sentinel_swap_v1_QueryParamsRequest,
    requestDeserialize: deserialize_sentinel_swap_v1_QueryParamsRequest,
    responseSerialize: serialize_sentinel_swap_v1_QueryParamsResponse,
    responseDeserialize: deserialize_sentinel_swap_v1_QueryParamsResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
