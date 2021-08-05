// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_node_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')
var sentinel_node_v1_node_pb = require('./node_pb.js')
var sentinel_node_v1_params_pb = require('./params_pb.js')

function serialize_sentinel_node_v1_QueryNodeRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodeRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodeRequest (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryNodeResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodeResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodeResponse (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryNodesForProviderRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodesForProviderRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodesForProviderRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodesForProviderRequest (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodesForProviderRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryNodesForProviderResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodesForProviderResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodesForProviderResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodesForProviderResponse (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodesForProviderResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryNodesRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodesRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodesRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodesRequest (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodesRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryNodesResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryNodesResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryNodesResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryNodesResponse (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryNodesResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryParamsRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryParamsRequest (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_QueryParamsResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_querier_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_QueryParamsResponse (buffer_arg) {
  return sentinel_node_v1_querier_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  queryNodes: {
    path: '/sentinel.node.v1.QueryService/QueryNodes',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_querier_pb.QueryNodesRequest,
    responseType: sentinel_node_v1_querier_pb.QueryNodesResponse,
    requestSerialize: serialize_sentinel_node_v1_QueryNodesRequest,
    requestDeserialize: deserialize_sentinel_node_v1_QueryNodesRequest,
    responseSerialize: serialize_sentinel_node_v1_QueryNodesResponse,
    responseDeserialize: deserialize_sentinel_node_v1_QueryNodesResponse
  },
  queryNodesForProvider: {
    path: '/sentinel.node.v1.QueryService/QueryNodesForProvider',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_querier_pb.QueryNodesForProviderRequest,
    responseType: sentinel_node_v1_querier_pb.QueryNodesForProviderResponse,
    requestSerialize: serialize_sentinel_node_v1_QueryNodesForProviderRequest,
    requestDeserialize: deserialize_sentinel_node_v1_QueryNodesForProviderRequest,
    responseSerialize: serialize_sentinel_node_v1_QueryNodesForProviderResponse,
    responseDeserialize: deserialize_sentinel_node_v1_QueryNodesForProviderResponse
  },
  queryNode: {
    path: '/sentinel.node.v1.QueryService/QueryNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_querier_pb.QueryNodeRequest,
    responseType: sentinel_node_v1_querier_pb.QueryNodeResponse,
    requestSerialize: serialize_sentinel_node_v1_QueryNodeRequest,
    requestDeserialize: deserialize_sentinel_node_v1_QueryNodeRequest,
    responseSerialize: serialize_sentinel_node_v1_QueryNodeResponse,
    responseDeserialize: deserialize_sentinel_node_v1_QueryNodeResponse
  },
  queryParams: {
    path: '/sentinel.node.v1.QueryService/QueryParams',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_querier_pb.QueryParamsRequest,
    responseType: sentinel_node_v1_querier_pb.QueryParamsResponse,
    requestSerialize: serialize_sentinel_node_v1_QueryParamsRequest,
    requestDeserialize: deserialize_sentinel_node_v1_QueryParamsRequest,
    responseSerialize: serialize_sentinel_node_v1_QueryParamsResponse,
    responseDeserialize: deserialize_sentinel_node_v1_QueryParamsResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
