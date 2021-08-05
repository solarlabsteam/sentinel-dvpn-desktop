// source: sentinel/node/v1/node.proto
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

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var sentinel_types_v1_status_pb = require('../../types/v1/status_pb.js');
goog.object.extend(proto, sentinel_types_v1_status_pb);
goog.exportSymbol('proto.sentinel.node.v1.Node', null, global);
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
proto.sentinel.node.v1.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sentinel.node.v1.Node.repeatedFields_, null);
};
goog.inherits(proto.sentinel.node.v1.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sentinel.node.v1.Node.displayName = 'proto.sentinel.node.v1.Node';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sentinel.node.v1.Node.repeatedFields_ = [3];



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
proto.sentinel.node.v1.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.sentinel.node.v1.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sentinel.node.v1.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.node.v1.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priceList: jspb.Message.toObjectList(msg.getPriceList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    remoteUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    statusAt: (f = msg.getStatusAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.sentinel.node.v1.Node}
 */
proto.sentinel.node.v1.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sentinel.node.v1.Node;
  return proto.sentinel.node.v1.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sentinel.node.v1.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sentinel.node.v1.Node}
 */
proto.sentinel.node.v1.Node.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteUrl(value);
      break;
    case 5:
      var value = /** @type {!proto.sentinel.types.v1.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStatusAt(value);
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
proto.sentinel.node.v1.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sentinel.node.v1.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sentinel.node.v1.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sentinel.node.v1.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getRemoteUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStatusAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.sentinel.node.v1.Node.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string provider = 2;
 * @return {string}
 */
proto.sentinel.node.v1.Node.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.setProvider = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin price = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.sentinel.node.v1.Node.prototype.getPriceList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.sentinel.node.v1.Node} returns this
*/
proto.sentinel.node.v1.Node.prototype.setPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.sentinel.node.v1.Node.prototype.addPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.clearPriceList = function() {
  return this.setPriceList([]);
};


/**
 * optional string remote_url = 4;
 * @return {string}
 */
proto.sentinel.node.v1.Node.prototype.getRemoteUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.setRemoteUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional sentinel.types.v1.Status status = 5;
 * @return {!proto.sentinel.types.v1.Status}
 */
proto.sentinel.node.v1.Node.prototype.getStatus = function() {
  return /** @type {!proto.sentinel.types.v1.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.sentinel.types.v1.Status} value
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp status_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sentinel.node.v1.Node.prototype.getStatusAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sentinel.node.v1.Node} returns this
*/
proto.sentinel.node.v1.Node.prototype.setStatusAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sentinel.node.v1.Node} returns this
 */
proto.sentinel.node.v1.Node.prototype.clearStatusAt = function() {
  return this.setStatusAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sentinel.node.v1.Node.prototype.hasStatusAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.sentinel.node.v1);
