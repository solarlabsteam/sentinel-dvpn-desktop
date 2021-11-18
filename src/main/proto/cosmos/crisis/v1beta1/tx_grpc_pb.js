// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_crisis_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

function serialize_cosmos_crisis_v1beta1_MsgVerifyInvariant (arg) {
  if (!(arg instanceof cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant)) {
    throw new Error('Expected argument of type cosmos.crisis.v1beta1.MsgVerifyInvariant')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_crisis_v1beta1_MsgVerifyInvariant (buffer_arg) {
  return cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_crisis_v1beta1_MsgVerifyInvariantResponse (arg) {
  if (!(arg instanceof cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse)) {
    throw new Error('Expected argument of type cosmos.crisis.v1beta1.MsgVerifyInvariantResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_crisis_v1beta1_MsgVerifyInvariantResponse (buffer_arg) {
  return cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the bank Msg service.
var MsgService = exports.MsgService = {
  // VerifyInvariant defines a method to verify a particular invariance.
  verifyInvariant: {
    path: '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    responseType: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse,
    requestSerialize: serialize_cosmos_crisis_v1beta1_MsgVerifyInvariant,
    requestDeserialize: deserialize_cosmos_crisis_v1beta1_MsgVerifyInvariant,
    responseSerialize: serialize_cosmos_crisis_v1beta1_MsgVerifyInvariantResponse,
    responseDeserialize: deserialize_cosmos_crisis_v1beta1_MsgVerifyInvariantResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
