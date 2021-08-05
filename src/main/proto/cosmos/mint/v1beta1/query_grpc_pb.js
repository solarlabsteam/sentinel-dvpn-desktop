// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_mint_v1beta1_query_pb = require('./query_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var cosmos_mint_v1beta1_mint_pb = require('./mint_pb.js')

function serialize_cosmos_mint_v1beta1_QueryAnnualProvisionsRequest (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryAnnualProvisionsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryAnnualProvisionsRequest (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_mint_v1beta1_QueryAnnualProvisionsResponse (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryAnnualProvisionsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryAnnualProvisionsResponse (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_mint_v1beta1_QueryInflationRequest (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryInflationRequest)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryInflationRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryInflationRequest (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryInflationRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_mint_v1beta1_QueryInflationResponse (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryInflationResponse)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryInflationResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryInflationResponse (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryInflationResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_mint_v1beta1_QueryParamsRequest (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryParamsRequest (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_mint_v1beta1_QueryParamsResponse (arg) {
  if (!(arg instanceof cosmos_mint_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.mint.v1beta1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_mint_v1beta1_QueryParamsResponse (buffer_arg) {
  return cosmos_mint_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Query provides defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Params returns the total set of minting parameters.
  params: {
    path: '/cosmos.mint.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    responseType: cosmos_mint_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_mint_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_mint_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_mint_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_mint_v1beta1_QueryParamsResponse
  },
  // Inflation returns the current minting inflation value.
  inflation: {
    path: '/cosmos.mint.v1beta1.Query/Inflation',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    responseType: cosmos_mint_v1beta1_query_pb.QueryInflationResponse,
    requestSerialize: serialize_cosmos_mint_v1beta1_QueryInflationRequest,
    requestDeserialize: deserialize_cosmos_mint_v1beta1_QueryInflationRequest,
    responseSerialize: serialize_cosmos_mint_v1beta1_QueryInflationResponse,
    responseDeserialize: deserialize_cosmos_mint_v1beta1_QueryInflationResponse
  },
  // AnnualProvisions current minting annual provisions value.
  annualProvisions: {
    path: '/cosmos.mint.v1beta1.Query/AnnualProvisions',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    responseType: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse,
    requestSerialize: serialize_cosmos_mint_v1beta1_QueryAnnualProvisionsRequest,
    requestDeserialize: deserialize_cosmos_mint_v1beta1_QueryAnnualProvisionsRequest,
    responseSerialize: serialize_cosmos_mint_v1beta1_QueryAnnualProvisionsResponse,
    responseDeserialize: deserialize_cosmos_mint_v1beta1_QueryAnnualProvisionsResponse
  }
}

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService)
