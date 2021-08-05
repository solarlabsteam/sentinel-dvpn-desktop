// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_node_v1_msg_pb = require('./msg_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')

function serialize_sentinel_node_v1_MsgRegisterRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgRegisterRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgRegisterRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgRegisterRequest (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_MsgRegisterResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgRegisterResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgRegisterResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgRegisterResponse (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_MsgSetStatusRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgSetStatusRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgSetStatusRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgSetStatusRequest (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgSetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_MsgSetStatusResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgSetStatusResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgSetStatusResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgSetStatusResponse (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgSetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_MsgUpdateRequest (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgUpdateRequest)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgUpdateRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgUpdateRequest (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_node_v1_MsgUpdateResponse (arg) {
  if (!(arg instanceof sentinel_node_v1_msg_pb.MsgUpdateResponse)) {
    throw new Error('Expected argument of type sentinel.node.v1.MsgUpdateResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_node_v1_MsgUpdateResponse (buffer_arg) {
  return sentinel_node_v1_msg_pb.MsgUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var MsgServiceService = exports.MsgServiceService = {
  msgRegister: {
    path: '/sentinel.node.v1.MsgService/MsgRegister',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_msg_pb.MsgRegisterRequest,
    responseType: sentinel_node_v1_msg_pb.MsgRegisterResponse,
    requestSerialize: serialize_sentinel_node_v1_MsgRegisterRequest,
    requestDeserialize: deserialize_sentinel_node_v1_MsgRegisterRequest,
    responseSerialize: serialize_sentinel_node_v1_MsgRegisterResponse,
    responseDeserialize: deserialize_sentinel_node_v1_MsgRegisterResponse
  },
  msgUpdate: {
    path: '/sentinel.node.v1.MsgService/MsgUpdate',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_msg_pb.MsgUpdateRequest,
    responseType: sentinel_node_v1_msg_pb.MsgUpdateResponse,
    requestSerialize: serialize_sentinel_node_v1_MsgUpdateRequest,
    requestDeserialize: deserialize_sentinel_node_v1_MsgUpdateRequest,
    responseSerialize: serialize_sentinel_node_v1_MsgUpdateResponse,
    responseDeserialize: deserialize_sentinel_node_v1_MsgUpdateResponse
  },
  msgSetStatus: {
    path: '/sentinel.node.v1.MsgService/MsgSetStatus',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_node_v1_msg_pb.MsgSetStatusRequest,
    responseType: sentinel_node_v1_msg_pb.MsgSetStatusResponse,
    requestSerialize: serialize_sentinel_node_v1_MsgSetStatusRequest,
    requestDeserialize: deserialize_sentinel_node_v1_MsgSetStatusRequest,
    responseSerialize: serialize_sentinel_node_v1_MsgSetStatusResponse,
    responseDeserialize: deserialize_sentinel_node_v1_MsgSetStatusResponse
  }
}

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService)
