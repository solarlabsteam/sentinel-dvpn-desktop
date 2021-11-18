// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_deposit_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_deposit_v1_deposit_pb = require('./deposit_pb.js')

function serialize_sentinel_deposit_v1_QueryDepositRequest (arg) {
  if (!(arg instanceof sentinel_deposit_v1_querier_pb.QueryDepositRequest)) {
    throw new Error('Expected argument of type sentinel.deposit.v1.QueryDepositRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_deposit_v1_QueryDepositRequest (buffer_arg) {
  return sentinel_deposit_v1_querier_pb.QueryDepositRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_deposit_v1_QueryDepositResponse (arg) {
  if (!(arg instanceof sentinel_deposit_v1_querier_pb.QueryDepositResponse)) {
    throw new Error('Expected argument of type sentinel.deposit.v1.QueryDepositResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_deposit_v1_QueryDepositResponse (buffer_arg) {
  return sentinel_deposit_v1_querier_pb.QueryDepositResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_deposit_v1_QueryDepositsRequest (arg) {
  if (!(arg instanceof sentinel_deposit_v1_querier_pb.QueryDepositsRequest)) {
    throw new Error('Expected argument of type sentinel.deposit.v1.QueryDepositsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_deposit_v1_QueryDepositsRequest (buffer_arg) {
  return sentinel_deposit_v1_querier_pb.QueryDepositsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_deposit_v1_QueryDepositsResponse (arg) {
  if (!(arg instanceof sentinel_deposit_v1_querier_pb.QueryDepositsResponse)) {
    throw new Error('Expected argument of type sentinel.deposit.v1.QueryDepositsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_deposit_v1_QueryDepositsResponse (buffer_arg) {
  return sentinel_deposit_v1_querier_pb.QueryDepositsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  queryDeposits: {
    path: '/sentinel.deposit.v1.QueryService/QueryDeposits',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_deposit_v1_querier_pb.QueryDepositsRequest,
    responseType: sentinel_deposit_v1_querier_pb.QueryDepositsResponse,
    requestSerialize: serialize_sentinel_deposit_v1_QueryDepositsRequest,
    requestDeserialize: deserialize_sentinel_deposit_v1_QueryDepositsRequest,
    responseSerialize: serialize_sentinel_deposit_v1_QueryDepositsResponse,
    responseDeserialize: deserialize_sentinel_deposit_v1_QueryDepositsResponse
  },
  queryDeposit: {
    path: '/sentinel.deposit.v1.QueryService/QueryDeposit',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_deposit_v1_querier_pb.QueryDepositRequest,
    responseType: sentinel_deposit_v1_querier_pb.QueryDepositResponse,
    requestSerialize: serialize_sentinel_deposit_v1_QueryDepositRequest,
    requestDeserialize: deserialize_sentinel_deposit_v1_QueryDepositRequest,
    responseSerialize: serialize_sentinel_deposit_v1_QueryDepositResponse,
    responseDeserialize: deserialize_sentinel_deposit_v1_QueryDepositResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
