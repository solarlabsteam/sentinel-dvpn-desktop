// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_swap_v1_msg_pb = require('./msg_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

function serialize_sentinel_swap_v1_MsgSwapRequest (arg) {
  if (!(arg instanceof sentinel_swap_v1_msg_pb.MsgSwapRequest)) {
    throw new Error('Expected argument of type sentinel.swap.v1.MsgSwapRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_MsgSwapRequest (buffer_arg) {
  return sentinel_swap_v1_msg_pb.MsgSwapRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_swap_v1_MsgSwapResponse (arg) {
  if (!(arg instanceof sentinel_swap_v1_msg_pb.MsgSwapResponse)) {
    throw new Error('Expected argument of type sentinel.swap.v1.MsgSwapResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_swap_v1_MsgSwapResponse (buffer_arg) {
  return sentinel_swap_v1_msg_pb.MsgSwapResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var MsgServiceService = exports.MsgServiceService = {
  msgSwap: {
    path: '/sentinel.swap.v1.MsgService/MsgSwap',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_swap_v1_msg_pb.MsgSwapRequest,
    responseType: sentinel_swap_v1_msg_pb.MsgSwapResponse,
    requestSerialize: serialize_sentinel_swap_v1_MsgSwapRequest,
    requestDeserialize: deserialize_sentinel_swap_v1_MsgSwapRequest,
    responseSerialize: serialize_sentinel_swap_v1_MsgSwapResponse,
    responseDeserialize: deserialize_sentinel_swap_v1_MsgSwapResponse
  }
}

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService)
