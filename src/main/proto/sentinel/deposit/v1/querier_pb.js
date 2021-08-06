// source: sentinel/deposit/v1/querier.proto
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

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var sentinel_deposit_v1_deposit_pb = require('./deposit_pb.js');
goog.object.extend(proto, sentinel_deposit_v1_deposit_pb);
goog.exportSymbol('proto.sentinel.deposit.v1.QueryDepositRequest', null, global);
goog.exportSymbol('proto.sentinel.deposit.v1.QueryDepositResponse', null, global);
goog.exportSymbol('proto.sentinel.deposit.v1.QueryDepositsRequest', null, global);
goog.exportSymbol('proto.sentinel.deposit.v1.QueryDepositsResponse', null, global);
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
proto.sentinel.deposit.v1.QueryDepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sentinel.deposit.v1.QueryDepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.deposit.v1.QueryDepositsRequest.displayName = 'proto.sentinel.deposit.v1.QueryDepositsRequest';
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
proto.sentinel.deposit.v1.QueryDepositRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sentinel.deposit.v1.QueryDepositRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.deposit.v1.QueryDepositRequest.displayName = 'proto.sentinel.deposit.v1.QueryDepositRequest';
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
proto.sentinel.deposit.v1.QueryDepositsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sentinel.deposit.v1.QueryDepositsResponse.repeatedFields_, null);
};
goog.inherits(proto.sentinel.deposit.v1.QueryDepositsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.deposit.v1.QueryDepositsResponse.displayName = 'proto.sentinel.deposit.v1.QueryDepositsResponse';
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
proto.sentinel.deposit.v1.QueryDepositResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sentinel.deposit.v1.QueryDepositResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.deposit.v1.QueryDepositResponse.displayName = 'proto.sentinel.deposit.v1.QueryDepositResponse';
}



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
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.deposit.v1.QueryDepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.deposit.v1.QueryDepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.sentinel.deposit.v1.QueryDepositsRequest}
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.deposit.v1.QueryDepositsRequest;
  return proto.sentinel.deposit.v1.QueryDepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.deposit.v1.QueryDepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.deposit.v1.QueryDepositsRequest}
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.deposit.v1.QueryDepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.deposit.v1.QueryDepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.sentinel.deposit.v1.QueryDepositsRequest} returns this
*/
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.deposit.v1.QueryDepositsRequest} returns this
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.deposit.v1.QueryDepositsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};





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
proto.sentinel.deposit.v1.QueryDepositRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.deposit.v1.QueryDepositRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.deposit.v1.QueryDepositRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sentinel.deposit.v1.QueryDepositRequest}
 */
proto.sentinel.deposit.v1.QueryDepositRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.deposit.v1.QueryDepositRequest;
  return proto.sentinel.deposit.v1.QueryDepositRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.deposit.v1.QueryDepositRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.deposit.v1.QueryDepositRequest}
 */
proto.sentinel.deposit.v1.QueryDepositRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.sentinel.deposit.v1.QueryDepositRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.deposit.v1.QueryDepositRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.deposit.v1.QueryDepositRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.sentinel.deposit.v1.QueryDepositRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sentinel.deposit.v1.QueryDepositRequest} returns this
 */
proto.sentinel.deposit.v1.QueryDepositRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.repeatedFields_ = [1];



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
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.deposit.v1.QueryDepositsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.deposit.v1.QueryDepositsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    sentinel_deposit_v1_deposit_pb.Deposit.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.deposit.v1.QueryDepositsResponse;
  return proto.sentinel.deposit.v1.QueryDepositsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.deposit.v1.QueryDepositsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sentinel_deposit_v1_deposit_pb.Deposit;
      reader.readMessage(value,sentinel_deposit_v1_deposit_pb.Deposit.deserializeBinaryFromReader);
      msg.addDeposits(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.deposit.v1.QueryDepositsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.deposit.v1.QueryDepositsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepositsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      sentinel_deposit_v1_deposit_pb.Deposit.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Deposit deposits = 1;
 * @return {!Array<!proto.sentinel.deposit.v1.Deposit>}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.sentinel.deposit.v1.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, sentinel_deposit_v1_deposit_pb.Deposit, 1));
};


/**
 * @param {!Array<!proto.sentinel.deposit.v1.Deposit>} value
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse} returns this
*/
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sentinel.deposit.v1.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sentinel.deposit.v1.Deposit}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sentinel.deposit.v1.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse} returns this
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.clearDepositsList = function() {
  return this.setDepositsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse} returns this
*/
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.deposit.v1.QueryDepositsResponse} returns this
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.deposit.v1.QueryDepositsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.deposit.v1.QueryDepositResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.deposit.v1.QueryDepositResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deposit: (f = msg.getDeposit()) && sentinel_deposit_v1_deposit_pb.Deposit.toObject(includeInstance, f)
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
 * @return {!proto.sentinel.deposit.v1.QueryDepositResponse}
 */
proto.sentinel.deposit.v1.QueryDepositResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.deposit.v1.QueryDepositResponse;
  return proto.sentinel.deposit.v1.QueryDepositResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.deposit.v1.QueryDepositResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.deposit.v1.QueryDepositResponse}
 */
proto.sentinel.deposit.v1.QueryDepositResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sentinel_deposit_v1_deposit_pb.Deposit;
      reader.readMessage(value,sentinel_deposit_v1_deposit_pb.Deposit.deserializeBinaryFromReader);
      msg.setDeposit(value);
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
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.deposit.v1.QueryDepositResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.deposit.v1.QueryDepositResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.deposit.v1.QueryDepositResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeposit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sentinel_deposit_v1_deposit_pb.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Deposit deposit = 1;
 * @return {?proto.sentinel.deposit.v1.Deposit}
 */
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.getDeposit = function() {
  return /** @type{?proto.sentinel.deposit.v1.Deposit} */ (
    jspb.Message.getWrapperField(this, sentinel_deposit_v1_deposit_pb.Deposit, 1));
};


/**
 * @param {?proto.sentinel.deposit.v1.Deposit|undefined} value
 * @return {!proto.sentinel.deposit.v1.QueryDepositResponse} returns this
*/
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.setDeposit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.deposit.v1.QueryDepositResponse} returns this
 */
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.clearDeposit = function() {
  return this.setDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.deposit.v1.QueryDepositResponse.prototype.hasDeposit = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.sentinel.deposit.v1);