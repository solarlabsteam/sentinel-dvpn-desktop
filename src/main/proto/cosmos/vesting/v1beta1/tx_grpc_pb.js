// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_vesting_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js')

function serialize_cosmos_vesting_v1beta1_MsgCreateVestingAccount (arg) {
  if (!(arg instanceof cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount)) {
    throw new Error('Expected argument of type cosmos.vesting.v1beta1.MsgCreateVestingAccount')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_vesting_v1beta1_MsgCreateVestingAccount (buffer_arg) {
  return cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_vesting_v1beta1_MsgCreateVestingAccountResponse (arg) {
  if (!(arg instanceof cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse)) {
    throw new Error('Expected argument of type cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_vesting_v1beta1_MsgCreateVestingAccountResponse (buffer_arg) {
  return cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the bank Msg service.
var MsgService = exports.MsgService = {
  // CreateVestingAccount defines a method that enables creating a vesting
// account.
  createVestingAccount: {
    path: '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
    responseType: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse,
    requestSerialize: serialize_cosmos_vesting_v1beta1_MsgCreateVestingAccount,
    requestDeserialize: deserialize_cosmos_vesting_v1beta1_MsgCreateVestingAccount,
    responseSerialize: serialize_cosmos_vesting_v1beta1_MsgCreateVestingAccountResponse,
    responseDeserialize: deserialize_cosmos_vesting_v1beta1_MsgCreateVestingAccountResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
