// source: cosmos/slashing/v1beta1/genesis.proto
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
var cosmos_slashing_v1beta1_slashing_pb = require('./slashing_pb.js');
goog.object.extend(proto, cosmos_slashing_v1beta1_slashing_pb);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.GenesisState', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.MissedBlock', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.SigningInfo', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks', null, global);
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
proto.cosmos.slashing.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.slashing.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.GenesisState.displayName = 'proto.cosmos.slashing.v1beta1.GenesisState';
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
proto.cosmos.slashing.v1beta1.SigningInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.SigningInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.SigningInfo.displayName = 'proto.cosmos.slashing.v1beta1.SigningInfo';
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
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.repeatedFields_, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.displayName = 'proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks';
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
proto.cosmos.slashing.v1beta1.MissedBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.MissedBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.MissedBlock.displayName = 'proto.cosmos.slashing.v1beta1.MissedBlock';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.slashing.v1beta1.GenesisState.repeatedFields_ = [2,3];



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
proto.cosmos.slashing.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && cosmos_slashing_v1beta1_slashing_pb.Params.toObject(includeInstance, f),
    signingInfosList: jspb.Message.toObjectList(msg.getSigningInfosList(),
    proto.cosmos.slashing.v1beta1.SigningInfo.toObject, includeInstance),
    missedBlocksList: jspb.Message.toObjectList(msg.getMissedBlocksList(),
    proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.toObject, includeInstance)
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
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState}
 */
proto.cosmos.slashing.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.GenesisState;
  return proto.cosmos.slashing.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState}
 */
proto.cosmos.slashing.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_slashing_v1beta1_slashing_pb.Params;
      reader.readMessage(value,cosmos_slashing_v1beta1_slashing_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.cosmos.slashing.v1beta1.SigningInfo;
      reader.readMessage(value,proto.cosmos.slashing.v1beta1.SigningInfo.deserializeBinaryFromReader);
      msg.addSigningInfos(value);
      break;
    case 3:
      var value = new proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks;
      reader.readMessage(value,proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.deserializeBinaryFromReader);
      msg.addMissedBlocks(value);
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
proto.cosmos.slashing.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_slashing_v1beta1_slashing_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getSigningInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cosmos.slashing.v1beta1.SigningInfo.serializeBinaryToWriter
    );
  }
  f = message.getMissedBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.cosmos.slashing.v1beta1.Params}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.cosmos.slashing.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.Params, 1));
};


/**
 * @param {?proto.cosmos.slashing.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
*/
proto.cosmos.slashing.v1beta1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SigningInfo signing_infos = 2;
 * @return {!Array<!proto.cosmos.slashing.v1beta1.SigningInfo>}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.getSigningInfosList = function() {
  return /** @type{!Array<!proto.cosmos.slashing.v1beta1.SigningInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.slashing.v1beta1.SigningInfo, 2));
};


/**
 * @param {!Array<!proto.cosmos.slashing.v1beta1.SigningInfo>} value
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
*/
proto.cosmos.slashing.v1beta1.GenesisState.prototype.setSigningInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.SigningInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.addSigningInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.slashing.v1beta1.SigningInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.clearSigningInfosList = function() {
  return this.setSigningInfosList([]);
};


/**
 * repeated ValidatorMissedBlocks missed_blocks = 3;
 * @return {!Array<!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks>}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.getMissedBlocksList = function() {
  return /** @type{!Array<!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks, 3));
};


/**
 * @param {!Array<!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks>} value
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
*/
proto.cosmos.slashing.v1beta1.GenesisState.prototype.setMissedBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks}
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.addMissedBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.slashing.v1beta1.GenesisState} returns this
 */
proto.cosmos.slashing.v1beta1.GenesisState.prototype.clearMissedBlocksList = function() {
  return this.setMissedBlocksList([]);
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
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.SigningInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.SigningInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.SigningInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorSigningInfo: (f = msg.getValidatorSigningInfo()) && cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo}
 */
proto.cosmos.slashing.v1beta1.SigningInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.SigningInfo;
  return proto.cosmos.slashing.v1beta1.SigningInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.SigningInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo}
 */
proto.cosmos.slashing.v1beta1.SigningInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo;
      reader.readMessage(value,cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.deserializeBinaryFromReader);
      msg.setValidatorSigningInfo(value);
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
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.SigningInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.SigningInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.SigningInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorSigningInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo} returns this
 */
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValidatorSigningInfo validator_signing_info = 2;
 * @return {?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo}
 */
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.getValidatorSigningInfo = function() {
  return /** @type{?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo} */ (
    jspb.Message.getWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo, 2));
};


/**
 * @param {?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo} returns this
*/
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.setValidatorSigningInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.SigningInfo} returns this
 */
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.clearValidatorSigningInfo = function() {
  return this.setValidatorSigningInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.SigningInfo.prototype.hasValidatorSigningInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.repeatedFields_ = [2];



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
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    missedBlocksList: jspb.Message.toObjectList(msg.getMissedBlocksList(),
    proto.cosmos.slashing.v1beta1.MissedBlock.toObject, includeInstance)
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
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks}
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks;
  return proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks}
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cosmos.slashing.v1beta1.MissedBlock;
      reader.readMessage(value,proto.cosmos.slashing.v1beta1.MissedBlock.deserializeBinaryFromReader);
      msg.addMissedBlocks(value);
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
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMissedBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cosmos.slashing.v1beta1.MissedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} returns this
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MissedBlock missed_blocks = 2;
 * @return {!Array<!proto.cosmos.slashing.v1beta1.MissedBlock>}
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.getMissedBlocksList = function() {
  return /** @type{!Array<!proto.cosmos.slashing.v1beta1.MissedBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.slashing.v1beta1.MissedBlock, 2));
};


/**
 * @param {!Array<!proto.cosmos.slashing.v1beta1.MissedBlock>} value
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} returns this
*/
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.setMissedBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.MissedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.slashing.v1beta1.MissedBlock}
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.addMissedBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.slashing.v1beta1.MissedBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks} returns this
 */
proto.cosmos.slashing.v1beta1.ValidatorMissedBlocks.prototype.clearMissedBlocksList = function() {
  return this.setMissedBlocksList([]);
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
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.MissedBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.MissedBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MissedBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    missed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.cosmos.slashing.v1beta1.MissedBlock}
 */
proto.cosmos.slashing.v1beta1.MissedBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.MissedBlock;
  return proto.cosmos.slashing.v1beta1.MissedBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.MissedBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.MissedBlock}
 */
proto.cosmos.slashing.v1beta1.MissedBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissed(value);
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
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.MissedBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.MissedBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MissedBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMissed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 index = 1;
 * @return {number}
 */
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.slashing.v1beta1.MissedBlock} returns this
 */
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool missed = 2;
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.getMissed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cosmos.slashing.v1beta1.MissedBlock} returns this
 */
proto.cosmos.slashing.v1beta1.MissedBlock.prototype.setMissed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.slashing.v1beta1);
