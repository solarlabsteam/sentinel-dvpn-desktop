// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_session_v1_msg_pb = require('./msg_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var sentinel_session_v1_proof_pb = require('./proof_pb.js')

function serialize_sentinel_session_v1_MsgEndRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgEndRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgEndRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgEndRequest (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgEndRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_MsgEndResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgEndResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgEndResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgEndResponse (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgEndResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_MsgStartRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgStartRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgStartRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgStartRequest (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgStartRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_MsgStartResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgStartResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgStartResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgStartResponse (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgStartResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_MsgUpdateRequest (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgUpdateRequest)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgUpdateRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgUpdateRequest (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_session_v1_MsgUpdateResponse (arg) {
  if (!(arg instanceof sentinel_session_v1_msg_pb.MsgUpdateResponse)) {
    throw new Error('Expected argument of type sentinel.session.v1.MsgUpdateResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_session_v1_MsgUpdateResponse (buffer_arg) {
  return sentinel_session_v1_msg_pb.MsgUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var MsgServiceService = exports.MsgServiceService = {
  msgStart: {
    path: '/sentinel.session.v1.MsgService/MsgStart',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_msg_pb.MsgStartRequest,
    responseType: sentinel_session_v1_msg_pb.MsgStartResponse,
    requestSerialize: serialize_sentinel_session_v1_MsgStartRequest,
    requestDeserialize: deserialize_sentinel_session_v1_MsgStartRequest,
    responseSerialize: serialize_sentinel_session_v1_MsgStartResponse,
    responseDeserialize: deserialize_sentinel_session_v1_MsgStartResponse
  },
  msgUpdate: {
    path: '/sentinel.session.v1.MsgService/MsgUpdate',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_msg_pb.MsgUpdateRequest,
    responseType: sentinel_session_v1_msg_pb.MsgUpdateResponse,
    requestSerialize: serialize_sentinel_session_v1_MsgUpdateRequest,
    requestDeserialize: deserialize_sentinel_session_v1_MsgUpdateRequest,
    responseSerialize: serialize_sentinel_session_v1_MsgUpdateResponse,
    responseDeserialize: deserialize_sentinel_session_v1_MsgUpdateResponse
  },
  msgEnd: {
    path: '/sentinel.session.v1.MsgService/MsgEnd',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_session_v1_msg_pb.MsgEndRequest,
    responseType: sentinel_session_v1_msg_pb.MsgEndResponse,
    requestSerialize: serialize_sentinel_session_v1_MsgEndRequest,
    requestDeserialize: deserialize_sentinel_session_v1_MsgEndRequest,
    responseSerialize: serialize_sentinel_session_v1_MsgEndResponse,
    responseDeserialize: deserialize_sentinel_session_v1_MsgEndResponse
  }
}

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService)
