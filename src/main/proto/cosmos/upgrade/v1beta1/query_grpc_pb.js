// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_upgrade_v1beta1_query_pb = require('./query_pb.js')
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var cosmos_upgrade_v1beta1_upgrade_pb = require('./upgrade_pb.js')

function serialize_cosmos_upgrade_v1beta1_QueryAppliedPlanRequest (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryAppliedPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryAppliedPlanRequest (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_upgrade_v1beta1_QueryAppliedPlanResponse (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryAppliedPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryAppliedPlanResponse (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_upgrade_v1beta1_QueryCurrentPlanRequest (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryCurrentPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryCurrentPlanRequest (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_upgrade_v1beta1_QueryCurrentPlanResponse (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryCurrentPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryCurrentPlanResponse (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateRequest (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateRequest (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateResponse (arg) {
  if (!(arg instanceof cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse)) {
    throw new Error('Expected argument of type cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateResponse (buffer_arg) {
  return cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Query defines the gRPC upgrade querier service.
var QueryService = exports.QueryService = {
  // CurrentPlan queries the current upgrade plan.
  currentPlan: {
    path: '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    responseType: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse,
    requestSerialize: serialize_cosmos_upgrade_v1beta1_QueryCurrentPlanRequest,
    requestDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryCurrentPlanRequest,
    responseSerialize: serialize_cosmos_upgrade_v1beta1_QueryCurrentPlanResponse,
    responseDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryCurrentPlanResponse
  },
  // AppliedPlan queries a previously applied upgrade plan by its name.
  appliedPlan: {
    path: '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    responseType: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse,
    requestSerialize: serialize_cosmos_upgrade_v1beta1_QueryAppliedPlanRequest,
    requestDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryAppliedPlanRequest,
    responseSerialize: serialize_cosmos_upgrade_v1beta1_QueryAppliedPlanResponse,
    responseDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryAppliedPlanResponse
  },
  // UpgradedConsensusState queries the consensus state that will serve
  // as a trusted kernel for the next version of this chain. It will only be
  // stored at the last height of this chain.
  // UpgradedConsensusState RPC not supported with legacy querier
  upgradedConsensusState: {
    path: '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    responseType: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse,
    requestSerialize: serialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateRequest,
    requestDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateRequest,
    responseSerialize: serialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateResponse,
    responseDeserialize: deserialize_cosmos_upgrade_v1beta1_QueryUpgradedConsensusStateResponse
  }
}

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService)
