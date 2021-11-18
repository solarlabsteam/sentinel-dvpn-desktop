// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_distribution_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js')

function serialize_cosmos_distribution_v1beta1_MsgFundCommunityPool (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgFundCommunityPool')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgFundCommunityPool (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgFundCommunityPoolResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgFundCommunityPoolResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddress (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgSetWithdrawAddress')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddress (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddressResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddressResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorReward (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorReward (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorRewardResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorRewardResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommission (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommission (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommissionResponse (arg) {
  if (!(arg instanceof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse)) {
    throw new Error('Expected argument of type cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommissionResponse (buffer_arg) {
  return cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the distribution Msg service.
var MsgService = exports.MsgService = {
  // SetWithdrawAddress defines a method to change the withdraw address
// for a delegator (or validator self-delegation).
  setWithdrawAddress: {
    path: '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    responseType: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddress,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddress,
    responseSerialize: serialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddressResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_MsgSetWithdrawAddressResponse
  },
  // WithdrawDelegatorReward defines a method to withdraw rewards of delegator
  // from a single validator.
  withdrawDelegatorReward: {
    path: '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    responseType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorReward,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorReward,
    responseSerialize: serialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorRewardResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_MsgWithdrawDelegatorRewardResponse
  },
  // WithdrawValidatorCommission defines a method to withdraw the
  // full commission to the validator address.
  withdrawValidatorCommission: {
    path: '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    responseType: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommission,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommission,
    responseSerialize: serialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommissionResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_MsgWithdrawValidatorCommissionResponse
  },
  // FundCommunityPool defines a method to allow an account to directly
  // fund the community pool.
  fundCommunityPool: {
    path: '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    responseType: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse,
    requestSerialize: serialize_cosmos_distribution_v1beta1_MsgFundCommunityPool,
    requestDeserialize: deserialize_cosmos_distribution_v1beta1_MsgFundCommunityPool,
    responseSerialize: serialize_cosmos_distribution_v1beta1_MsgFundCommunityPoolResponse,
    responseDeserialize: deserialize_cosmos_distribution_v1beta1_MsgFundCommunityPoolResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
