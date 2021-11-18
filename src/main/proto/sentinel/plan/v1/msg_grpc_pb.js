// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_plan_v1_msg_pb = require('./msg_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')

function serialize_sentinel_plan_v1_MsgAddNodeRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgAddNodeRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgAddNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgAddNodeRequest (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgAddNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgAddNodeResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgAddNodeResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgAddNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgAddNodeResponse (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgAddNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgAddRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgAddRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgAddRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgAddRequest (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgAddRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgAddResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgAddResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgAddResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgAddResponse (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgAddResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgRemoveNodeRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgRemoveNodeRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgRemoveNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgRemoveNodeRequest (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgRemoveNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgRemoveNodeResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgRemoveNodeResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgRemoveNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgRemoveNodeResponse (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgRemoveNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgSetStatusRequest (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgSetStatusRequest)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgSetStatusRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgSetStatusRequest (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgSetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_plan_v1_MsgSetStatusResponse (arg) {
  if (!(arg instanceof sentinel_plan_v1_msg_pb.MsgSetStatusResponse)) {
    throw new Error('Expected argument of type sentinel.plan.v1.MsgSetStatusResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_plan_v1_MsgSetStatusResponse (buffer_arg) {
  return sentinel_plan_v1_msg_pb.MsgSetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var MsgServiceService = exports.MsgServiceService = {
  msgAdd: {
    path: '/sentinel.plan.v1.MsgService/MsgAdd',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_msg_pb.MsgAddRequest,
    responseType: sentinel_plan_v1_msg_pb.MsgAddResponse,
    requestSerialize: serialize_sentinel_plan_v1_MsgAddRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_MsgAddRequest,
    responseSerialize: serialize_sentinel_plan_v1_MsgAddResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_MsgAddResponse
  },
  msgSetStatus: {
    path: '/sentinel.plan.v1.MsgService/MsgSetStatus',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_msg_pb.MsgSetStatusRequest,
    responseType: sentinel_plan_v1_msg_pb.MsgSetStatusResponse,
    requestSerialize: serialize_sentinel_plan_v1_MsgSetStatusRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_MsgSetStatusRequest,
    responseSerialize: serialize_sentinel_plan_v1_MsgSetStatusResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_MsgSetStatusResponse
  },
  msgAddNode: {
    path: '/sentinel.plan.v1.MsgService/MsgAddNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_msg_pb.MsgAddNodeRequest,
    responseType: sentinel_plan_v1_msg_pb.MsgAddNodeResponse,
    requestSerialize: serialize_sentinel_plan_v1_MsgAddNodeRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_MsgAddNodeRequest,
    responseSerialize: serialize_sentinel_plan_v1_MsgAddNodeResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_MsgAddNodeResponse
  },
  msgRemoveNode: {
    path: '/sentinel.plan.v1.MsgService/MsgRemoveNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_plan_v1_msg_pb.MsgRemoveNodeRequest,
    responseType: sentinel_plan_v1_msg_pb.MsgRemoveNodeResponse,
    requestSerialize: serialize_sentinel_plan_v1_MsgRemoveNodeRequest,
    requestDeserialize: deserialize_sentinel_plan_v1_MsgRemoveNodeRequest,
    responseSerialize: serialize_sentinel_plan_v1_MsgRemoveNodeResponse,
    responseDeserialize: deserialize_sentinel_plan_v1_MsgRemoveNodeResponse
  }
}

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService)
