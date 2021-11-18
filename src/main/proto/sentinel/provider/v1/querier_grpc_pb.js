// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_provider_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_provider_v1_provider_pb = require('./provider_pb.js')
var sentinel_provider_v1_params_pb = require('./params_pb.js')

function serialize_sentinel_provider_v1_QueryParamsRequest (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryParamsRequest (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_provider_v1_QueryParamsResponse (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryParamsResponse (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_provider_v1_QueryProviderRequest (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryProviderRequest)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryProviderRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryProviderRequest (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_provider_v1_QueryProviderResponse (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryProviderResponse)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryProviderResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryProviderResponse (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryProviderResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_provider_v1_QueryProvidersRequest (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryProvidersRequest)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryProvidersRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryProvidersRequest (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_provider_v1_QueryProvidersResponse (arg) {
  if (!(arg instanceof sentinel_provider_v1_querier_pb.QueryProvidersResponse)) {
    throw new Error('Expected argument of type sentinel.provider.v1.QueryProvidersResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_provider_v1_QueryProvidersResponse (buffer_arg) {
  return sentinel_provider_v1_querier_pb.QueryProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  queryProviders: {
    path: '/sentinel.provider.v1.QueryService/QueryProviders',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_provider_v1_querier_pb.QueryProvidersRequest,
    responseType: sentinel_provider_v1_querier_pb.QueryProvidersResponse,
    requestSerialize: serialize_sentinel_provider_v1_QueryProvidersRequest,
    requestDeserialize: deserialize_sentinel_provider_v1_QueryProvidersRequest,
    responseSerialize: serialize_sentinel_provider_v1_QueryProvidersResponse,
    responseDeserialize: deserialize_sentinel_provider_v1_QueryProvidersResponse
  },
  queryProvider: {
    path: '/sentinel.provider.v1.QueryService/QueryProvider',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_provider_v1_querier_pb.QueryProviderRequest,
    responseType: sentinel_provider_v1_querier_pb.QueryProviderResponse,
    requestSerialize: serialize_sentinel_provider_v1_QueryProviderRequest,
    requestDeserialize: deserialize_sentinel_provider_v1_QueryProviderRequest,
    responseSerialize: serialize_sentinel_provider_v1_QueryProviderResponse,
    responseDeserialize: deserialize_sentinel_provider_v1_QueryProviderResponse
  },
  queryParams: {
    path: '/sentinel.provider.v1.QueryService/QueryParams',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_provider_v1_querier_pb.QueryParamsRequest,
    responseType: sentinel_provider_v1_querier_pb.QueryParamsResponse,
    requestSerialize: serialize_sentinel_provider_v1_QueryParamsRequest,
    requestDeserialize: deserialize_sentinel_provider_v1_QueryParamsRequest,
    responseSerialize: serialize_sentinel_provider_v1_QueryParamsResponse,
    responseDeserialize: deserialize_sentinel_provider_v1_QueryParamsResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
