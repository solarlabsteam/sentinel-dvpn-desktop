// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_evidence_v1beta1_tx_pb = require('./tx_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

function serialize_cosmos_evidence_v1beta1_MsgSubmitEvidence (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.MsgSubmitEvidence')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_MsgSubmitEvidence (buffer_arg) {
  return cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_evidence_v1beta1_MsgSubmitEvidenceResponse (arg) {
  if (!(arg instanceof cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse)) {
    throw new Error('Expected argument of type cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_evidence_v1beta1_MsgSubmitEvidenceResponse (buffer_arg) {
  return cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the evidence Msg service.
var MsgService = exports.MsgService = {
  // SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
// counterfactual signing.
  submitEvidence: {
    path: '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    responseType: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse,
    requestSerialize: serialize_cosmos_evidence_v1beta1_MsgSubmitEvidence,
    requestDeserialize: deserialize_cosmos_evidence_v1beta1_MsgSubmitEvidence,
    responseSerialize: serialize_cosmos_evidence_v1beta1_MsgSubmitEvidenceResponse,
    responseDeserialize: deserialize_cosmos_evidence_v1beta1_MsgSubmitEvidenceResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
