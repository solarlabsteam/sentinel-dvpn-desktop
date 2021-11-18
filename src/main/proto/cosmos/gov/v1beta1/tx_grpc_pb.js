// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_gov_v1beta1_tx_pb = require('./tx_pb.js')
var cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js')
var cosmos_gov_v1beta1_gov_pb = require('./gov_pb.js')
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

function serialize_cosmos_gov_v1beta1_MsgDeposit (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgDeposit)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgDeposit')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgDeposit (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgDeposit.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_gov_v1beta1_MsgDepositResponse (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgDepositResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgDepositResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgDepositResponse (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgDepositResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_gov_v1beta1_MsgSubmitProposal (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgSubmitProposal')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgSubmitProposal (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_gov_v1beta1_MsgSubmitProposalResponse (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgSubmitProposalResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgSubmitProposalResponse (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_gov_v1beta1_MsgVote (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgVote)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgVote')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgVote (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgVote.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_gov_v1beta1_MsgVoteResponse (arg) {
  if (!(arg instanceof cosmos_gov_v1beta1_tx_pb.MsgVoteResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta1.MsgVoteResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_gov_v1beta1_MsgVoteResponse (buffer_arg) {
  return cosmos_gov_v1beta1_tx_pb.MsgVoteResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// Msg defines the bank Msg service.
var MsgService = exports.MsgService = {
  // SubmitProposal defines a method to create new proposal given a content.
  submitProposal: {
    path: '/cosmos.gov.v1beta1.Msg/SubmitProposal',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    responseType: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse,
    requestSerialize: serialize_cosmos_gov_v1beta1_MsgSubmitProposal,
    requestDeserialize: deserialize_cosmos_gov_v1beta1_MsgSubmitProposal,
    responseSerialize: serialize_cosmos_gov_v1beta1_MsgSubmitProposalResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta1_MsgSubmitProposalResponse
  },
  // Vote defines a method to add a vote on a specific proposal.
  vote: {
    path: '/cosmos.gov.v1beta1.Msg/Vote',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta1_tx_pb.MsgVote,
    responseType: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse,
    requestSerialize: serialize_cosmos_gov_v1beta1_MsgVote,
    requestDeserialize: deserialize_cosmos_gov_v1beta1_MsgVote,
    responseSerialize: serialize_cosmos_gov_v1beta1_MsgVoteResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta1_MsgVoteResponse
  },
  // Deposit defines a method to add deposit on a specific proposal.
  deposit: {
    path: '/cosmos.gov.v1beta1.Msg/Deposit',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    responseType: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse,
    requestSerialize: serialize_cosmos_gov_v1beta1_MsgDeposit,
    requestDeserialize: deserialize_cosmos_gov_v1beta1_MsgDeposit,
    responseSerialize: serialize_cosmos_gov_v1beta1_MsgDepositResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta1_MsgDepositResponse
  }
}

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService)
