// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_slashing_v1beta1_query_pb = require('./query_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var cosmos_slashing_v1beta1_slashing_pb = require('./slashing_pb.js')

function serialize_cosmos_slashing_v1beta1_QueryParamsRequest (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QueryParamsRequest (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_QueryParamsResponse (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QueryParamsResponse (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_QuerySigningInfoRequest (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QuerySigningInfoRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QuerySigningInfoRequest (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_QuerySigningInfoResponse (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QuerySigningInfoResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QuerySigningInfoResponse (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_QuerySigningInfosRequest (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QuerySigningInfosRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QuerySigningInfosRequest (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_QuerySigningInfosResponse (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.QuerySigningInfosResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_QuerySigningInfosResponse (buffer_arg) {
  return cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Query provides defines the gRPC querier service
var QueryService = exports.QueryService = {
  // Params queries the parameters of slashing module
  params: {
    path: '/cosmos.slashing.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    responseType: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_slashing_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_slashing_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_slashing_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_slashing_v1beta1_QueryParamsResponse
  },
  // SigningInfo queries the signing info of given cons address
  signingInfo: {
    path: '/cosmos.slashing.v1beta1.Query/SigningInfo',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    responseType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse,
    requestSerialize: serialize_cosmos_slashing_v1beta1_QuerySigningInfoRequest,
    requestDeserialize: deserialize_cosmos_slashing_v1beta1_QuerySigningInfoRequest,
    responseSerialize: serialize_cosmos_slashing_v1beta1_QuerySigningInfoResponse,
    responseDeserialize: deserialize_cosmos_slashing_v1beta1_QuerySigningInfoResponse
  },
  // SigningInfos queries signing info of all validators
  signingInfos: {
    path: '/cosmos.slashing.v1beta1.Query/SigningInfos',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    responseType: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse,
    requestSerialize: serialize_cosmos_slashing_v1beta1_QuerySigningInfosRequest,
    requestDeserialize: deserialize_cosmos_slashing_v1beta1_QuerySigningInfosRequest,
    responseSerialize: serialize_cosmos_slashing_v1beta1_QuerySigningInfosResponse,
    responseDeserialize: deserialize_cosmos_slashing_v1beta1_QuerySigningInfosResponse
  }
}

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService)
