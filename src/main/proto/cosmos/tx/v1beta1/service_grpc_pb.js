// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_tx_v1beta1_service_pb = require('./service_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var cosmos_base_abci_v1beta1_abci_pb = require('../../base/abci/v1beta1/abci_pb.js')
var cosmos_tx_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../base/query/v1beta1/pagination_pb.js')

function serialize_cosmos_tx_v1beta1_BroadcastTxRequest (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.BroadcastTxRequest)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.BroadcastTxRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_BroadcastTxRequest (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.BroadcastTxRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_BroadcastTxResponse (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.BroadcastTxResponse)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.BroadcastTxResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_BroadcastTxResponse (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.BroadcastTxResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_GetTxRequest (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.GetTxRequest)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.GetTxRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_GetTxRequest (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.GetTxRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_GetTxResponse (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.GetTxResponse)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.GetTxResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_GetTxResponse (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.GetTxResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_GetTxsEventRequest (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.GetTxsEventRequest)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.GetTxsEventRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_GetTxsEventRequest (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.GetTxsEventRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_GetTxsEventResponse (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.GetTxsEventResponse)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.GetTxsEventResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_GetTxsEventResponse (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.GetTxsEventResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_SimulateRequest (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.SimulateRequest)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.SimulateRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_SimulateRequest (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.SimulateRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_tx_v1beta1_SimulateResponse (arg) {
  if (!(arg instanceof cosmos_tx_v1beta1_service_pb.SimulateResponse)) {
    throw new Error('Expected argument of type cosmos.tx.v1beta1.SimulateResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_tx_v1beta1_SimulateResponse (buffer_arg) {
  return cosmos_tx_v1beta1_service_pb.SimulateResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Service defines a gRPC service for interacting with transactions.
var ServiceService = exports.ServiceService = {
  // Simulate simulates executing a transaction for estimating gas usage.
  simulate: {
    path: '/cosmos.tx.v1beta1.Service/Simulate',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    responseType: cosmos_tx_v1beta1_service_pb.SimulateResponse,
    requestSerialize: serialize_cosmos_tx_v1beta1_SimulateRequest,
    requestDeserialize: deserialize_cosmos_tx_v1beta1_SimulateRequest,
    responseSerialize: serialize_cosmos_tx_v1beta1_SimulateResponse,
    responseDeserialize: deserialize_cosmos_tx_v1beta1_SimulateResponse
  },
  // GetTx fetches a tx by hash.
  getTx: {
    path: '/cosmos.tx.v1beta1.Service/GetTx',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    responseType: cosmos_tx_v1beta1_service_pb.GetTxResponse,
    requestSerialize: serialize_cosmos_tx_v1beta1_GetTxRequest,
    requestDeserialize: deserialize_cosmos_tx_v1beta1_GetTxRequest,
    responseSerialize: serialize_cosmos_tx_v1beta1_GetTxResponse,
    responseDeserialize: deserialize_cosmos_tx_v1beta1_GetTxResponse
  },
  // BroadcastTx broadcast transaction.
  broadcastTx: {
    path: '/cosmos.tx.v1beta1.Service/BroadcastTx',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    responseType: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse,
    requestSerialize: serialize_cosmos_tx_v1beta1_BroadcastTxRequest,
    requestDeserialize: deserialize_cosmos_tx_v1beta1_BroadcastTxRequest,
    responseSerialize: serialize_cosmos_tx_v1beta1_BroadcastTxResponse,
    responseDeserialize: deserialize_cosmos_tx_v1beta1_BroadcastTxResponse
  },
  // GetTxsEvent fetches txs by event.
  getTxsEvent: {
    path: '/cosmos.tx.v1beta1.Service/GetTxsEvent',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    responseType: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse,
    requestSerialize: serialize_cosmos_tx_v1beta1_GetTxsEventRequest,
    requestDeserialize: deserialize_cosmos_tx_v1beta1_GetTxsEventRequest,
    responseSerialize: serialize_cosmos_tx_v1beta1_GetTxsEventResponse,
    responseDeserialize: deserialize_cosmos_tx_v1beta1_GetTxsEventResponse
  }
}

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService)
