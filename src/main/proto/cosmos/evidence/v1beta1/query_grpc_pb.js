// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_evidence_v1beta1_query_pb = require('./query_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

function serialize_cosmos_evidence_v1beta1_QueryAllEvidenceRequest (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.QueryAllEvidenceRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_QueryAllEvidenceRequest (buffer_arg) {
  return cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_evidence_v1beta1_QueryAllEvidenceResponse (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.QueryAllEvidenceResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_QueryAllEvidenceResponse (buffer_arg) {
  return cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_evidence_v1beta1_QueryEvidenceRequest (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.QueryEvidenceRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_QueryEvidenceRequest (buffer_arg) {
  return cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_evidence_v1beta1_QueryEvidenceResponse (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.QueryEvidenceResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_QueryEvidenceResponse (buffer_arg) {
  return cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Evidence queries evidence based on evidence hash.
  evidence: {
    path: '/cosmos.evidence.v1beta1.Query/Evidence',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    responseType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse,
    requestSerialize: serialize_cosmos_evidence_v1beta1_QueryEvidenceRequest,
    requestDeserialize: deserialize_cosmos_evidence_v1beta1_QueryEvidenceRequest,
    responseSerialize: serialize_cosmos_evidence_v1beta1_QueryEvidenceResponse,
    responseDeserialize: deserialize_cosmos_evidence_v1beta1_QueryEvidenceResponse
  },
  // AllEvidence queries all evidence.
  allEvidence: {
    path: '/cosmos.evidence.v1beta1.Query/AllEvidence',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    responseType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse,
    requestSerialize: serialize_cosmos_evidence_v1beta1_QueryAllEvidenceRequest,
    requestDeserialize: deserialize_cosmos_evidence_v1beta1_QueryAllEvidenceRequest,
    responseSerialize: serialize_cosmos_evidence_v1beta1_QueryAllEvidenceResponse,
    responseDeserialize: deserialize_cosmos_evidence_v1beta1_QueryAllEvidenceResponse
  }
}

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService)
