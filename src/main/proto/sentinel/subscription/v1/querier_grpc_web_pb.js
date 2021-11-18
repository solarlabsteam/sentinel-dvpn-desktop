/**
 * @fileoverview gRPC-Web generated client stub for sentinel.subscription.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var sentinel_subscription_v1_quota_pb = require('./quota_pb.js')

var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js')

var sentinel_subscription_v1_subscription_pb = require('./subscription_pb.js')

var sentinel_subscription_v1_params_pb = require('./params_pb.js')
const proto = {};
proto.sentinel = {};
proto.sentinel.subscription = {};
proto.sentinel.subscription.v1 = require('./querier_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sentinel.subscription.v1.QueryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsResponse>}
 */
const methodDescriptor_QueryService_QuerySubscriptions = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QuerySubscriptions',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QuerySubscriptionsRequest,
  proto.sentinel.subscription.v1.QuerySubscriptionsResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsResponse>}
 */
const methodInfo_QueryService_QuerySubscriptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QuerySubscriptionsResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QuerySubscriptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QuerySubscriptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.querySubscriptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptions',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptions,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QuerySubscriptionsResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.querySubscriptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptions',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse>}
 */
const methodDescriptor_QueryService_QuerySubscriptionsForNode = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForNode',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest,
  proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse>}
 */
const methodInfo_QueryService_QuerySubscriptionsForNode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.querySubscriptionsForNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForNode',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForNode,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QuerySubscriptionsForNodeResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.querySubscriptionsForNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForNode',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForNode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse>}
 */
const methodDescriptor_QueryService_QuerySubscriptionsForPlan = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForPlan',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest,
  proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse>}
 */
const methodInfo_QueryService_QuerySubscriptionsForPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.querySubscriptionsForPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForPlan',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForPlan,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QuerySubscriptionsForPlanResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.querySubscriptionsForPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForPlan',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse>}
 */
const methodDescriptor_QueryService_QuerySubscriptionsForAddress = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForAddress',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest,
  proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse>}
 */
const methodInfo_QueryService_QuerySubscriptionsForAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.querySubscriptionsForAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForAddress',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForAddress,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QuerySubscriptionsForAddressResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.querySubscriptionsForAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscriptionsForAddress',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscriptionsForAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionResponse>}
 */
const methodDescriptor_QueryService_QuerySubscription = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QuerySubscription',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QuerySubscriptionRequest,
  proto.sentinel.subscription.v1.QuerySubscriptionResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QuerySubscriptionRequest,
 *   !proto.sentinel.subscription.v1.QuerySubscriptionResponse>}
 */
const methodInfo_QueryService_QuerySubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QuerySubscriptionResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QuerySubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QuerySubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QuerySubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QuerySubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.querySubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscription',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscription,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QuerySubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QuerySubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.querySubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QuerySubscription',
      request,
      metadata || {},
      methodDescriptor_QueryService_QuerySubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QueryQuotaRequest,
 *   !proto.sentinel.subscription.v1.QueryQuotaResponse>}
 */
const methodDescriptor_QueryService_QueryQuota = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QueryQuota',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QueryQuotaRequest,
  proto.sentinel.subscription.v1.QueryQuotaResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryQuotaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QueryQuotaRequest,
 *   !proto.sentinel.subscription.v1.QueryQuotaResponse>}
 */
const methodInfo_QueryService_QueryQuota = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QueryQuotaResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryQuotaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QueryQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QueryQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QueryQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.queryQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryQuota',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryQuota,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QueryQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QueryQuotaResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.queryQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryQuota',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryQuota);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QueryQuotasRequest,
 *   !proto.sentinel.subscription.v1.QueryQuotasResponse>}
 */
const methodDescriptor_QueryService_QueryQuotas = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QueryQuotas',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QueryQuotasRequest,
  proto.sentinel.subscription.v1.QueryQuotasResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryQuotasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryQuotasResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QueryQuotasRequest,
 *   !proto.sentinel.subscription.v1.QueryQuotasResponse>}
 */
const methodInfo_QueryService_QueryQuotas = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QueryQuotasResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryQuotasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryQuotasResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QueryQuotasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QueryQuotasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QueryQuotasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.queryQuotas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryQuotas',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryQuotas,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QueryQuotasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QueryQuotasResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.queryQuotas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryQuotas',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryQuotas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sentinel.subscription.v1.QueryParamsRequest,
 *   !proto.sentinel.subscription.v1.QueryParamsResponse>}
 */
const methodDescriptor_QueryService_QueryParams = new grpc.web.MethodDescriptor(
  '/sentinel.subscription.v1.QueryService/QueryParams',
  grpc.web.MethodType.UNARY,
  proto.sentinel.subscription.v1.QueryParamsRequest,
  proto.sentinel.subscription.v1.QueryParamsResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sentinel.subscription.v1.QueryParamsRequest,
 *   !proto.sentinel.subscription.v1.QueryParamsResponse>}
 */
const methodInfo_QueryService_QueryParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sentinel.subscription.v1.QueryParamsResponse,
  /**
   * @param {!proto.sentinel.subscription.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sentinel.subscription.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.sentinel.subscription.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sentinel.subscription.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sentinel.subscription.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sentinel.subscription.v1.QueryServiceClient.prototype.queryParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryParams',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryParams,
      callback);
};


/**
 * @param {!proto.sentinel.subscription.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sentinel.subscription.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.sentinel.subscription.v1.QueryServicePromiseClient.prototype.queryParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sentinel.subscription.v1.QueryService/QueryParams',
      request,
      metadata || {},
      methodDescriptor_QueryService_QueryParams);
};


module.exports = proto.sentinel.subscription.v1;

