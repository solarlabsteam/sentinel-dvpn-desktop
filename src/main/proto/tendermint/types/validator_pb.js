// source: tendermint/types/validator.proto
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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var tendermint_crypto_keys_pb = require('../crypto/keys_pb.js');
goog.object.extend(proto, tendermint_crypto_keys_pb);
goog.exportSymbol('proto.tendermint.types.SimpleValidator', null, global);
goog.exportSymbol('proto.tendermint.types.Validator', null, global);
goog.exportSymbol('proto.tendermint.types.ValidatorSet', null, global);
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
proto.tendermint.types.ValidatorSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.types.ValidatorSet.repeatedFields_, null);
};
goog.inherits(proto.tendermint.types.ValidatorSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.types.ValidatorSet.displayName = 'proto.tendermint.types.ValidatorSet';
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
proto.tendermint.types.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.types.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.types.Validator.displayName = 'proto.tendermint.types.Validator';
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
proto.tendermint.types.SimpleValidator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.types.SimpleValidator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.types.SimpleValidator.displayName = 'proto.tendermint.types.SimpleValidator';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.types.ValidatorSet.repeatedFields_ = [1];



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
proto.tendermint.types.ValidatorSet.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.ValidatorSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.ValidatorSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.ValidatorSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.tendermint.types.Validator.toObject, includeInstance),
    proposer: (f = msg.getProposer()) && proto.tendermint.types.Validator.toObject(includeInstance, f),
    totalVotingPower: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tendermint.types.ValidatorSet}
 */
proto.tendermint.types.ValidatorSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.ValidatorSet;
  return proto.tendermint.types.ValidatorSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.ValidatorSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.ValidatorSet}
 */
proto.tendermint.types.ValidatorSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.types.Validator;
      reader.readMessage(value,proto.tendermint.types.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 2:
      var value = new proto.tendermint.types.Validator;
      reader.readMessage(value,proto.tendermint.types.Validator.deserializeBinaryFromReader);
      msg.setProposer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalVotingPower(value);
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
proto.tendermint.types.ValidatorSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.ValidatorSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.ValidatorSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.ValidatorSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tendermint.types.Validator.serializeBinaryToWriter
    );
  }
  f = message.getProposer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tendermint.types.Validator.serializeBinaryToWriter
    );
  }
  f = message.getTotalVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated Validator validators = 1;
 * @return {!Array<!proto.tendermint.types.Validator>}
 */
proto.tendermint.types.ValidatorSet.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.tendermint.types.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.types.Validator, 1));
};


/**
 * @param {!Array<!proto.tendermint.types.Validator>} value
 * @return {!proto.tendermint.types.ValidatorSet} returns this
*/
proto.tendermint.types.ValidatorSet.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tendermint.types.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.types.Validator}
 */
proto.tendermint.types.ValidatorSet.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tendermint.types.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tendermint.types.ValidatorSet} returns this
 */
proto.tendermint.types.ValidatorSet.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * optional Validator proposer = 2;
 * @return {?proto.tendermint.types.Validator}
 */
proto.tendermint.types.ValidatorSet.prototype.getProposer = function() {
  return /** @type{?proto.tendermint.types.Validator} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.types.Validator, 2));
};


/**
 * @param {?proto.tendermint.types.Validator|undefined} value
 * @return {!proto.tendermint.types.ValidatorSet} returns this
*/
proto.tendermint.types.ValidatorSet.prototype.setProposer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.types.ValidatorSet} returns this
 */
proto.tendermint.types.ValidatorSet.prototype.clearProposer = function() {
  return this.setProposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.types.ValidatorSet.prototype.hasProposer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 total_voting_power = 3;
 * @return {number}
 */
proto.tendermint.types.ValidatorSet.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.types.ValidatorSet} returns this
 */
proto.tendermint.types.ValidatorSet.prototype.setTotalVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.tendermint.types.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.Validator.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    pubKey: (f = msg.getPubKey()) && tendermint_crypto_keys_pb.PublicKey.toObject(includeInstance, f),
    votingPower: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proposerPriority: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.tendermint.types.Validator}
 */
proto.tendermint.types.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.Validator;
  return proto.tendermint.types.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.Validator}
 */
proto.tendermint.types.Validator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new tendermint_crypto_keys_pb.PublicKey;
      reader.readMessage(value,tendermint_crypto_keys_pb.PublicKey.deserializeBinaryFromReader);
      msg.setPubKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVotingPower(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposerPriority(value);
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
proto.tendermint.types.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.Validator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPubKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tendermint_crypto_keys_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getProposerPriority();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tendermint.types.Validator.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.tendermint.types.Validator.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.tendermint.types.Validator.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tendermint.types.Validator} returns this
 */
proto.tendermint.types.Validator.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional tendermint.crypto.PublicKey pub_key = 2;
 * @return {?proto.tendermint.crypto.PublicKey}
 */
proto.tendermint.types.Validator.prototype.getPubKey = function() {
  return /** @type{?proto.tendermint.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, tendermint_crypto_keys_pb.PublicKey, 2));
};


/**
 * @param {?proto.tendermint.crypto.PublicKey|undefined} value
 * @return {!proto.tendermint.types.Validator} returns this
*/
proto.tendermint.types.Validator.prototype.setPubKey = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.types.Validator} returns this
 */
proto.tendermint.types.Validator.prototype.clearPubKey = function() {
  return this.setPubKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.types.Validator.prototype.hasPubKey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 voting_power = 3;
 * @return {number}
 */
proto.tendermint.types.Validator.prototype.getVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.types.Validator} returns this
 */
proto.tendermint.types.Validator.prototype.setVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 proposer_priority = 4;
 * @return {number}
 */
proto.tendermint.types.Validator.prototype.getProposerPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.types.Validator} returns this
 */
proto.tendermint.types.Validator.prototype.setProposerPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.tendermint.types.SimpleValidator.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.SimpleValidator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.SimpleValidator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.SimpleValidator.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: (f = msg.getPubKey()) && tendermint_crypto_keys_pb.PublicKey.toObject(includeInstance, f),
    votingPower: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tendermint.types.SimpleValidator}
 */
proto.tendermint.types.SimpleValidator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.SimpleValidator;
  return proto.tendermint.types.SimpleValidator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.SimpleValidator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.SimpleValidator}
 */
proto.tendermint.types.SimpleValidator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_crypto_keys_pb.PublicKey;
      reader.readMessage(value,tendermint_crypto_keys_pb.PublicKey.deserializeBinaryFromReader);
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVotingPower(value);
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
proto.tendermint.types.SimpleValidator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.SimpleValidator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.SimpleValidator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.SimpleValidator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_crypto_keys_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional tendermint.crypto.PublicKey pub_key = 1;
 * @return {?proto.tendermint.crypto.PublicKey}
 */
proto.tendermint.types.SimpleValidator.prototype.getPubKey = function() {
  return /** @type{?proto.tendermint.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, tendermint_crypto_keys_pb.PublicKey, 1));
};


/**
 * @param {?proto.tendermint.crypto.PublicKey|undefined} value
 * @return {!proto.tendermint.types.SimpleValidator} returns this
*/
proto.tendermint.types.SimpleValidator.prototype.setPubKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.types.SimpleValidator} returns this
 */
proto.tendermint.types.SimpleValidator.prototype.clearPubKey = function() {
  return this.setPubKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.types.SimpleValidator.prototype.hasPubKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 voting_power = 2;
 * @return {number}
 */
proto.tendermint.types.SimpleValidator.prototype.getVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.types.SimpleValidator} returns this
 */
proto.tendermint.types.SimpleValidator.prototype.setVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.tendermint.types);
