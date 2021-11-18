// source: sentinel/types/v1/status.proto
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
goog.exportSymbol('proto.sentinel.types.v1.Status', null, global);
/**
 * @enum {number}
 */
proto.sentinel.types.v1.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_ACTIVE: 1,
  STATUS_INACTIVE_PENDING: 2,
  STATUS_INACTIVE: 3
};

goog.object.extend(exports, proto.sentinel.types.v1);
