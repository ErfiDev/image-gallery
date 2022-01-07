/**
 * @fileoverview gRPC-Web generated client stub for greeting
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greeting = require('./greeting_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeting.GreetingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeting.GreetingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.greeting.Request,
 *   !proto.greeting.Response>}
 */
const methodDescriptor_Greeting_Login = new grpc.web.MethodDescriptor(
  '/greeting.Greeting/Login',
  grpc.web.MethodType.UNARY,
  proto.greeting.Request,
  proto.greeting.Response,
  /**
   * @param {!proto.greeting.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeting.Response.deserializeBinary
);


/**
 * @param {!proto.greeting.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greeting.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greeting.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greeting.GreetingClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greeting.Greeting/Login',
      request,
      metadata || {},
      methodDescriptor_Greeting_Login,
      callback);
};


/**
 * @param {!proto.greeting.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greeting.Response>}
 *     Promise that resolves to the response
 */
proto.greeting.GreetingPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greeting.Greeting/Login',
      request,
      metadata || {},
      methodDescriptor_Greeting_Login);
};


module.exports = proto.greeting;

