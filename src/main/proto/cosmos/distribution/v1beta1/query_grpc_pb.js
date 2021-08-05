// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_distribution_v1beta1_query_pb = require('./query_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js')
var cosmos_distribution_v1beta1_distribution_pb = require('./distribution_pb.js')

function serialize_cosmos_distribution_v1beta1_QueryCommunityPoolRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryCommunityPoolRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryCommunityPoolRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryCommunityPoolResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryCommunityPoolResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryCommunityPoolResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegationRewardsRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegationRewardsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegationRewardsRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegationRewardsResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegationRewardsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegationRewardsResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryParamsRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryParamsRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryParamsResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryParamsResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorCommissionRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorCommissionRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorCommissionRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorCommissionResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorCommissionResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorCommissionResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorSlashesRequest (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorSlashesRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorSlashesRequest (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_QueryValidatorSlashesResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.QueryValidatorSlashesResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_QueryValidatorSlashesResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Query defines the gRPC querier service for distribution module.
var QueryService = exports.QueryService = {
  // Params queries params of the distribution module.
  params: {
    path: '/cosmos.distribution.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryParamsResponse
  },
  // ValidatorOutstandingRewards queries rewards of a validator address.
  validatorOutstandingRewards: {
    path: '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorOutstandingRewardsResponse
  },
  // ValidatorCommission queries accumulated commission for a validator.
  validatorCommission: {
    path: '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorCommissionRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorCommissionRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorCommissionResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorCommissionResponse
  },
  // ValidatorSlashes queries slash events of a validator.
  validatorSlashes: {
    path: '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorSlashesRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorSlashesRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryValidatorSlashesResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryValidatorSlashesResponse
  },
  // DelegationRewards queries the total rewards accrued by a delegation.
  delegationRewards: {
    path: '/cosmos.distribution.v1beta1.Query/DelegationRewards',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegationRewardsRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegationRewardsRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegationRewardsResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegationRewardsResponse
  },
  // DelegationTotalRewards queries the total rewards accrued by a each
  // validator.
  delegationTotalRewards: {
    path: '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegationTotalRewardsResponse
  },
  // DelegatorValidators queries the validators of a delegator.
  delegatorValidators: {
    path: '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegatorValidatorsResponse
  },
  // DelegatorWithdrawAddress queries withdraw address of a delegator.
  delegatorWithdrawAddress: {
    path: '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryDelegatorWithdrawAddressResponse
  },
  // CommunityPool queries the community pool coins.
  communityPool: {
    path: '/cosmos.distribution.v1beta1.Query/CommunityPool',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    responseType: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_QueryCommunityPoolRequest,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_QueryCommunityPoolRequest,
    responseSerialize: serialize_cosmos_distribution_v1beta1_QueryCommunityPoolResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_QueryCommunityPoolResponse
  }
}

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService)
