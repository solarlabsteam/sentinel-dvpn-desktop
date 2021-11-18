// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_base_tendermint_v1beta1_query_pb = require('./query_pb.js')
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
var tendermint_p2p_types_pb = require('../../../../tendermint/p2p/types_pb.js')
var tendermint_types_block_pb = require('../../../../tendermint/types/block_pb.js')
var tendermint_types_types_pb = require('../../../../tendermint/types/types_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../query/v1beta1/pagination_pb.js')

function serialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetLatestBlockRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetLatestBlockRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetLatestBlockRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetLatestBlockResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetLatestBlockResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetLatestBlockResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetNodeInfoRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetNodeInfoRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetNodeInfoRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetNodeInfoResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetNodeInfoResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetNodeInfoResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetSyncingRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetSyncingRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetSyncingRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetSyncingResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetSyncingResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetSyncingResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightRequest (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightRequest (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightResponse (arg) {
  if (!(arg instanceof cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse)) {
    throw new Error('Expected argument of type cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightResponse (buffer_arg) {
  return cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Service defines the gRPC querier service for tendermint queries.
var ServiceService = exports.ServiceService = {
  // GetNodeInfo queries the current node info.
  getNodeInfo: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetNodeInfoRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetNodeInfoRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetNodeInfoResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetNodeInfoResponse
  },
  // GetSyncing queries node syncing.
  getSyncing: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetSyncingRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetSyncingRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetSyncingResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetSyncingResponse
  },
  // GetLatestBlock returns the latest block.
  getLatestBlock: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetLatestBlockRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetLatestBlockRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetLatestBlockResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetLatestBlockResponse
  },
  // GetBlockByHeight queries block for given height.
  getBlockByHeight: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetBlockByHeightResponse
  },
  // GetLatestValidatorSet queries latest validator-set.
  getLatestValidatorSet: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetLatestValidatorSetResponse
  },
  // GetValidatorSetByHeight queries validator-set at a given height.
  getValidatorSetByHeight: {
    path: '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    responseType: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse,
    requestSerialize: serialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightRequest,
    requestDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightRequest,
    responseSerialize: serialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightResponse,
    responseDeserialize: deserialize_cosmos_base_tendermint_v1beta1_GetValidatorSetByHeightResponse
  }
}

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService)
