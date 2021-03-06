// source: sentinel/subscription/v1/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var sentinel_subscription_v1_params_pb = require('./params_pb.js');
goog.object.extend(proto, sentinel_subscription_v1_params_pb);
var sentinel_subscription_v1_quota_pb = require('./quota_pb.js');
goog.object.extend(proto, sentinel_subscription_v1_quota_pb);
var sentinel_subscription_v1_subscription_pb = require('./subscription_pb.js');
goog.object.extend(proto, sentinel_subscription_v1_subscription_pb);
goog.exportSymbol('proto.sentinel.subscription.v1.GenesisState', null, global);
goog.exportSymbol('proto.sentinel.subscription.v1.GenesisSubscription', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sentinel.subscription.v1.GenesisSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sentinel.subscription.v1.GenesisSubscription.repeatedFields_, null);
};
goog.inherits(proto.sentinel.subscription.v1.GenesisSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.subscription.v1.GenesisSubscription.displayName = 'proto.sentinel.subscription.v1.GenesisSubscription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sentinel.subscription.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sentinel.subscription.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.sentinel.subscription.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.subscription.v1.GenesisState.displayName = 'proto.sentinel.subscription.v1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sentinel.subscription.v1.GenesisSubscription.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.subscription.v1.GenesisSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.subscription.v1.GenesisSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.subscription.v1.GenesisSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscription: (f = msg.getSubscription()) && sentinel_subscription_v1_subscription_pb.Subscription.toObject(includeInstance, f),
    quotasList: jspb.Message.toObjectList(msg.getQuotasList(),
    sentinel_subscription_v1_quota_pb.Quota.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription}
 */
proto.sentinel.subscription.v1.GenesisSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.subscription.v1.GenesisSubscription;
  return proto.sentinel.subscription.v1.GenesisSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.subscription.v1.GenesisSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription}
 */
proto.sentinel.subscription.v1.GenesisSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sentinel_subscription_v1_subscription_pb.Subscription;
      reader.readMessage(value,sentinel_subscription_v1_subscription_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 2:
      var value = new sentinel_subscription_v1_quota_pb.Quota;
      reader.readMessage(value,sentinel_subscription_v1_quota_pb.Quota.deserializeBinaryFromReader);
      msg.addQuotas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.subscription.v1.GenesisSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.subscription.v1.GenesisSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.subscription.v1.GenesisSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sentinel_subscription_v1_subscription_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getQuotasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      sentinel_subscription_v1_quota_pb.Quota.serializeBinaryToWriter
    );
  }
};


/**
 * optional Subscription subscription = 1;
 * @return {?proto.sentinel.subscription.v1.Subscription}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.getSubscription = function() {
  return /** @type{?proto.sentinel.subscription.v1.Subscription} */ (
    jspb.Message.getWrapperField(this, sentinel_subscription_v1_subscription_pb.Subscription, 1));
};


/**
 * @param {?proto.sentinel.subscription.v1.Subscription|undefined} value
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription} returns this
*/
proto.sentinel.subscription.v1.GenesisSubscription.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription} returns this
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Quota quotas = 2;
 * @return {!Array<!proto.sentinel.subscription.v1.Quota>}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.getQuotasList = function() {
  return /** @type{!Array<!proto.sentinel.subscription.v1.Quota>} */ (
    jspb.Message.getRepeatedWrapperField(this, sentinel_subscription_v1_quota_pb.Quota, 2));
};


/**
 * @param {!Array<!proto.sentinel.subscription.v1.Quota>} value
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription} returns this
*/
proto.sentinel.subscription.v1.GenesisSubscription.prototype.setQuotasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sentinel.subscription.v1.Quota=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sentinel.subscription.v1.Quota}
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.addQuotas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sentinel.subscription.v1.Quota, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription} returns this
 */
proto.sentinel.subscription.v1.GenesisSubscription.prototype.clearQuotasList = function() {
  return this.setQuotasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sentinel.subscription.v1.GenesisState.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.subscription.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.subscription.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.subscription.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionsList: jspb.Message.toObjectList(msg.getSubscriptionsList(),
    proto.sentinel.subscription.v1.GenesisSubscription.toObject, includeInstance),
    params: (f = msg.getParams()) && sentinel_subscription_v1_params_pb.Params.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sentinel.subscription.v1.GenesisState}
 */
proto.sentinel.subscription.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.subscription.v1.GenesisState;
  return proto.sentinel.subscription.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.subscription.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.subscription.v1.GenesisState}
 */
proto.sentinel.subscription.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sentinel.subscription.v1.GenesisSubscription;
      reader.readMessage(value,proto.sentinel.subscription.v1.GenesisSubscription.deserializeBinaryFromReader);
      msg.addSubscriptions(value);
      break;
    case 2:
      var value = new sentinel_subscription_v1_params_pb.Params;
      reader.readMessage(value,sentinel_subscription_v1_params_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.subscription.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.subscription.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.subscription.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sentinel.subscription.v1.GenesisSubscription.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sentinel_subscription_v1_params_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GenesisSubscription subscriptions = 1;
 * @return {!Array<!proto.sentinel.subscription.v1.GenesisSubscription>}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.getSubscriptionsList = function() {
  return /** @type{!Array<!proto.sentinel.subscription.v1.GenesisSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sentinel.subscription.v1.GenesisSubscription, 1));
};


/**
 * @param {!Array<!proto.sentinel.subscription.v1.GenesisSubscription>} value
 * @return {!proto.sentinel.subscription.v1.GenesisState} returns this
*/
proto.sentinel.subscription.v1.GenesisState.prototype.setSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sentinel.subscription.v1.GenesisSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sentinel.subscription.v1.GenesisSubscription}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.addSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sentinel.subscription.v1.GenesisSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sentinel.subscription.v1.GenesisState} returns this
 */
proto.sentinel.subscription.v1.GenesisState.prototype.clearSubscriptionsList = function() {
  return this.setSubscriptionsList([]);
};


/**
 * optional Params params = 2;
 * @return {?proto.sentinel.subscription.v1.Params}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.sentinel.subscription.v1.Params} */ (
    jspb.Message.getWrapperField(this, sentinel_subscription_v1_params_pb.Params, 2));
};


/**
 * @param {?proto.sentinel.subscription.v1.Params|undefined} value
 * @return {!proto.sentinel.subscription.v1.GenesisState} returns this
*/
proto.sentinel.subscription.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.subscription.v1.GenesisState} returns this
 */
proto.sentinel.subscription.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.subscription.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.sentinel.subscription.v1);
