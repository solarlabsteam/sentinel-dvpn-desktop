// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_subscription_v1_msg_pb = require('./msg_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

function serialize_sentinel_subscription_v1_MsgAddQuotaRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgAddQuotaRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgAddQuotaRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgAddQuotaRequest (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgAddQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgAddQuotaResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgAddQuotaResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgAddQuotaResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgAddQuotaResponse (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgAddQuotaResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgCancelRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgCancelRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgCancelRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgCancelRequest (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgCancelRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgCancelResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgCancelResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgCancelResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgCancelResponse (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgCancelResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgSubscribeToNodeRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgSubscribeToNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgSubscribeToNodeRequest (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgSubscribeToNodeResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgSubscribeToNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgSubscribeToNodeResponse (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgSubscribeToPlanRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgSubscribeToPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgSubscribeToPlanRequest (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgSubscribeToPlanResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgSubscribeToPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgSubscribeToPlanResponse (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgUpdateQuotaRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgUpdateQuotaRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgUpdateQuotaRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgUpdateQuotaRequest (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgUpdateQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_MsgUpdateQuotaResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_msg_pb.MsgUpdateQuotaResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.MsgUpdateQuotaResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_MsgUpdateQuotaResponse (buffer_arg) {
  return sentinel_subscription_v1_msg_pb.MsgUpdateQuotaResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var MsgServiceService = exports.MsgServiceService = {
  msgSubscribeToNode: {
    path: '/sentinel.subscription.v1.MsgService/MsgSubscribeToNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeRequest,
    responseType: sentinel_subscription_v1_msg_pb.MsgSubscribeToNodeResponse,
    requestSerialize: serialize_sentinel_subscription_v1_MsgSubscribeToNodeRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_MsgSubscribeToNodeRequest,
    responseSerialize: serialize_sentinel_subscription_v1_MsgSubscribeToNodeResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_MsgSubscribeToNodeResponse
  },
  msgSubscribeToPlan: {
    path: '/sentinel.subscription.v1.MsgService/MsgSubscribeToPlan',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanRequest,
    responseType: sentinel_subscription_v1_msg_pb.MsgSubscribeToPlanResponse,
    requestSerialize: serialize_sentinel_subscription_v1_MsgSubscribeToPlanRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_MsgSubscribeToPlanRequest,
    responseSerialize: serialize_sentinel_subscription_v1_MsgSubscribeToPlanResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_MsgSubscribeToPlanResponse
  },
  msgCancel: {
    path: '/sentinel.subscription.v1.MsgService/MsgCancel',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_msg_pb.MsgCancelRequest,
    responseType: sentinel_subscription_v1_msg_pb.MsgCancelResponse,
    requestSerialize: serialize_sentinel_subscription_v1_MsgCancelRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_MsgCancelRequest,
    responseSerialize: serialize_sentinel_subscription_v1_MsgCancelResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_MsgCancelResponse
  },
  msgAddQuota: {
    path: '/sentinel.subscription.v1.MsgService/MsgAddQuota',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_msg_pb.MsgAddQuotaRequest,
    responseType: sentinel_subscription_v1_msg_pb.MsgAddQuotaResponse,
    requestSerialize: serialize_sentinel_subscription_v1_MsgAddQuotaRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_MsgAddQuotaRequest,
    responseSerialize: serialize_sentinel_subscription_v1_MsgAddQuotaResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_MsgAddQuotaResponse
  },
  msgUpdateQuota: {
    path: '/sentinel.subscription.v1.MsgService/MsgUpdateQuota',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_msg_pb.MsgUpdateQuotaRequest,
    responseType: sentinel_subscription_v1_msg_pb.MsgUpdateQuotaResponse,
    requestSerialize: serialize_sentinel_subscription_v1_MsgUpdateQuotaRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_MsgUpdateQuotaRequest,
    responseSerialize: serialize_sentinel_subscription_v1_MsgUpdateQuotaResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_MsgUpdateQuotaResponse
  }
}

exports.MsgServiceClient = grpc.makeGenericClientConstructor(MsgServiceService)
