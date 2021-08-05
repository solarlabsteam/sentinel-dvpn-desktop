// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_slashing_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

function serialize_cosmos_slashing_v1beta1_MsgUnjail (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_tx_pb.MsgUnjail)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.MsgUnjail')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_MsgUnjail (buffer_arg) {
  return cosmos_slashing_v1beta1_tx_pb.MsgUnjail.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_slashing_v1beta1_MsgUnjailResponse (arg) {
  if (!(arg instanceof cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse)) {
    throw new Error('Expected argument of type cosmos.slashing.v1beta1.MsgUnjailResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_slashing_v1beta1_MsgUnjailResponse (buffer_arg) {
  return cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the slashing Msg service.
var MsgService = exports.MsgService = {
  // Unjail defines a method for unjailing a jailed validator, thus returning
// them into the bonded validator set, so they can begin receiving provisions
// and rewards again.
  unjail: {
    path: '/cosmos.slashing.v1beta1.Msg/Unjail',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    responseType: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse,
    requestSerialize: serialize_cosmos_slashing_v1beta1_MsgUnjail,
    requestDeserialize: deserialize_cosmos_slashing_v1beta1_MsgUnjail,
    responseSerialize: serialize_cosmos_slashing_v1beta1_MsgUnjailResponse,
    responseDeserialize: deserialize_cosmos_slashing_v1beta1_MsgUnjailResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
