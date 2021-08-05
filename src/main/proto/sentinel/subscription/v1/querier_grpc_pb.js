// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var sentinel_subscription_v1_querier_pb = require('./querier_pb.js')
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
var sentinel_subscription_v1_quota_pb = require('./quota_pb.js')
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')
var sentinel_subscription_v1_subscription_pb = require('./subscription_pb.js')
var sentinel_subscription_v1_params_pb = require('./params_pb.js')

function serialize_sentinel_subscription_v1_QueryParamsRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryParamsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryParamsRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QueryParamsResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryParamsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryParamsResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QueryQuotaRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryQuotaRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryQuotaRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryQuotaRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QueryQuotaResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryQuotaResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryQuotaResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryQuotaResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryQuotaResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QueryQuotasRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryQuotasRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryQuotasRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryQuotasRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryQuotasRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QueryQuotasResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QueryQuotasResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QueryQuotasResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QueryQuotasResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QueryQuotasResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForAddressRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForAddressRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForAddressRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForAddressResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForAddressResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForAddressResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForNodeRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForNodeRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForNodeRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForNodeResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForNodeResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForNodeResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForPlanRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForPlanRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForPlanRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsForPlanResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsForPlanResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsForPlanResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsRequest (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsRequest)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsRequest (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_sentinel_subscription_v1_QuerySubscriptionsResponse (arg) {
  if (!(arg instanceof sentinel_subscription_v1_querier_pb.QuerySubscriptionsResponse)) {
    throw new Error('Expected argument of type sentinel.subscription.v1.QuerySubscriptionsResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_sentinel_subscription_v1_QuerySubscriptionsResponse (buffer_arg) {
  return sentinel_subscription_v1_querier_pb.QuerySubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var QueryServiceService = exports.QueryServiceService = {
  querySubscriptions: {
    path: '/sentinel.subscription.v1.QueryService/QuerySubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsRequest,
    responseType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsResponse
  },
  querySubscriptionsForNode: {
    path: '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForNode',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeRequest,
    responseType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForNodeResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForNodeRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForNodeRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForNodeResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForNodeResponse
  },
  querySubscriptionsForPlan: {
    path: '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForPlan',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanRequest,
    responseType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForPlanResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForPlanRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForPlanRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForPlanResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForPlanResponse
  },
  querySubscriptionsForAddress: {
    path: '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForAddress',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressRequest,
    responseType: sentinel_subscription_v1_querier_pb.QuerySubscriptionsForAddressResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForAddressRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForAddressRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionsForAddressResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionsForAddressResponse
  },
  querySubscription: {
    path: '/sentinel.subscription.v1.QueryService/QuerySubscription',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QuerySubscriptionRequest,
    responseType: sentinel_subscription_v1_querier_pb.QuerySubscriptionResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QuerySubscriptionResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QuerySubscriptionResponse
  },
  queryQuota: {
    path: '/sentinel.subscription.v1.QueryService/QueryQuota',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QueryQuotaRequest,
    responseType: sentinel_subscription_v1_querier_pb.QueryQuotaResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QueryQuotaRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QueryQuotaRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QueryQuotaResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QueryQuotaResponse
  },
  queryQuotas: {
    path: '/sentinel.subscription.v1.QueryService/QueryQuotas',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QueryQuotasRequest,
    responseType: sentinel_subscription_v1_querier_pb.QueryQuotasResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QueryQuotasRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QueryQuotasRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QueryQuotasResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QueryQuotasResponse
  },
  queryParams: {
    path: '/sentinel.subscription.v1.QueryService/QueryParams',
    requestStream: false,
    responseStream: false,
    requestType: sentinel_subscription_v1_querier_pb.QueryParamsRequest,
    responseType: sentinel_subscription_v1_querier_pb.QueryParamsResponse,
    requestSerialize: serialize_sentinel_subscription_v1_QueryParamsRequest,
    requestDeserialize: deserialize_sentinel_subscription_v1_QueryParamsRequest,
    responseSerialize: serialize_sentinel_subscription_v1_QueryParamsResponse,
    responseDeserialize: deserialize_sentinel_subscription_v1_QueryParamsResponse
  }
}

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService)
