// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var cosmos_base_reflection_v1beta1_reflection_pb = require('./reflection_pb.js')
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

function serialize_cosmos_base_reflection_v1beta1_ListAllInterfacesRequest (arg) {
  if (!(arg instanceof cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v1beta1.ListAllInterfacesRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_reflection_v1beta1_ListAllInterfacesRequest (buffer_arg) {
  return cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_reflection_v1beta1_ListAllInterfacesResponse (arg) {
  if (!(arg instanceof cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v1beta1.ListAllInterfacesResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_reflection_v1beta1_ListAllInterfacesResponse (buffer_arg) {
  return cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_reflection_v1beta1_ListImplementationsRequest (arg) {
  if (!(arg instanceof cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v1beta1.ListImplementationsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_reflection_v1beta1_ListImplementationsRequest (buffer_arg) {
  return cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_cosmos_base_reflection_v1beta1_ListImplementationsResponse (arg) {
  if (!(arg instanceof cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v1beta1.ListImplementationsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_cosmos_base_reflection_v1beta1_ListImplementationsResponse (buffer_arg) {
  return cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

// ReflectionService defines a service for interface reflection.
var ReflectionServiceService = exports.ReflectionServiceService = {
  // ListAllInterfaces lists all the interfaces registered in the interface
// registry.
  listAllInterfaces: {
    path: '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse,
    requestSerialize: serialize_cosmos_base_reflection_v1beta1_ListAllInterfacesRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v1beta1_ListAllInterfacesRequest,
    responseSerialize: serialize_cosmos_base_reflection_v1beta1_ListAllInterfacesResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v1beta1_ListAllInterfacesResponse
  },
  // ListImplementations list all the concrete types that implement a given
  // interface.
  listImplementations: {
    path: '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    responseType: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse,
    requestSerialize: serialize_cosmos_base_reflection_v1beta1_ListImplementationsRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v1beta1_ListImplementationsRequest,
    responseSerialize: serialize_cosmos_base_reflection_v1beta1_ListImplementationsResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v1beta1_ListImplementationsResponse
  }
}

exports.ReflectionServiceClient = grpc.makeGenericClientConstructor(ReflectionServiceService)
