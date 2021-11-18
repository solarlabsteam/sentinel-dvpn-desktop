// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_plan_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_node_v1_node_pb = require('../../node/v1/node_pb.js')
var sentinel_plan_v1_plan_pb = require('./plan_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')

function serialize_sentinel_plan_v1_QueryNodesForPlanRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryNodesForPlanRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryNodesForPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryNodesForPlanRequest (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryNodesForPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryNodesForPlanResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryNodesForPlanResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryNodesForPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryNodesForPlanResponse (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryNodesForPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlanRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlanRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlanRequest (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlanResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlanResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlanResponse (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlansForProviderRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlansForProviderRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlansForProviderRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlansForProviderRequest (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlansForProviderRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlansForProviderResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlansForProviderResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlansForProviderResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlansForProviderResponse (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlansForProviderResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlansRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlansRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlansRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlansRequest (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlansRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_QueryPlansResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_querier_pb.QueryPlansResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.QueryPlansResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_QueryPlansResponse (buffer_arg) {
  return sentinel_plan_v1_querier_pb.QueryPlansResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  queryPlans: {
    path: '/sentinel.plan.v1.QueryService/QueryPlans',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_querier_pb.QueryPlansRequest,
    responseType: sentinel_plan_v1_querier_pb.QueryPlansResponse,
    requestSerialize: serialize_sentinel_plan_v1_QueryPlansRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_QueryPlansRequest,
    responseSerialize: serialize_sentinel_plan_v1_QueryPlansResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_QueryPlansResponse
  },
  queryPlansForProvider: {
    path: '/sentinel.plan.v1.QueryService/QueryPlansForProvider',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_querier_pb.QueryPlansForProviderRequest,
    responseType: sentinel_plan_v1_querier_pb.QueryPlansForProviderResponse,
    requestSerialize: serialize_sentinel_plan_v1_QueryPlansForProviderRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_QueryPlansForProviderRequest,
    responseSerialize: serialize_sentinel_plan_v1_QueryPlansForProviderResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_QueryPlansForProviderResponse
  },
  queryPlan: {
    path: '/sentinel.plan.v1.QueryService/QueryPlan',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_querier_pb.QueryPlanRequest,
    responseType: sentinel_plan_v1_querier_pb.QueryPlanResponse,
    requestSerialize: serialize_sentinel_plan_v1_QueryPlanRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_QueryPlanRequest,
    responseSerialize: serialize_sentinel_plan_v1_QueryPlanResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_QueryPlanResponse
  },
  queryNodesForPlan: {
    path: '/sentinel.plan.v1.QueryService/QueryNodesForPlan',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_querier_pb.QueryNodesForPlanRequest,
    responseType: sentinel_plan_v1_querier_pb.QueryNodesForPlanResponse,
    requestSerialize: serialize_sentinel_plan_v1_QueryNodesForPlanRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_QueryNodesForPlanRequest,
    responseSerialize: serialize_sentinel_plan_v1_QueryNodesForPlanResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_QueryNodesForPlanResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
