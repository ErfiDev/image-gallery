/**
 * @fileoverview gRPC-Web generated client stub for protobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protobuf = require('./app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protobuf.FileUploaderClient =
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
proto.protobuf.FileUploaderPromiseClient =
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
 *   !proto.protobuf.Req,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Upload = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Upload',
  grpc.web.MethodType.UNARY,
  proto.protobuf.Req,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.upload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Upload',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Upload,
      callback);
};


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.upload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Upload',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Upload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.EditReq,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Edit = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Edit',
  grpc.web.MethodType.UNARY,
  proto.protobuf.EditReq,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.EditReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.EditReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.edit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Edit',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Edit,
      callback);
};


/**
 * @param {!proto.protobuf.EditReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.edit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Edit',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Edit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.DeleteReq,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Delete = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Delete',
  grpc.web.MethodType.UNARY,
  proto.protobuf.DeleteReq,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Delete',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Delete,
      callback);
};


/**
 * @param {!proto.protobuf.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Delete',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetReq,
 *   !proto.protobuf.Responses>}
 */
const methodDescriptor_FileUploader_Get = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Get',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetReq,
  proto.protobuf.Responses,
  /**
   * @param {!proto.protobuf.GetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Responses.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Responses)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Responses>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Get',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Get,
      callback);
};


/**
 * @param {!proto.protobuf.GetReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Responses>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Get',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetSpecificFile,
 *   !proto.protobuf.GetRes>}
 */
const methodDescriptor_FileUploader_GetOne = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/GetOne',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetSpecificFile,
  proto.protobuf.GetRes,
  /**
   * @param {!proto.protobuf.GetSpecificFile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetRes.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetSpecificFile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.GetRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.getOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/GetOne',
      request,
      metadata || {},
      methodDescriptor_FileUploader_GetOne,
      callback);
};


/**
 * @param {!proto.protobuf.GetSpecificFile} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetRes>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.getOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/GetOne',
      request,
      metadata || {},
      methodDescriptor_FileUploader_GetOne);
};


module.exports = proto.protobuf;

