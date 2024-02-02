"use strict";

const http = require("http"),
  getErrorMessage = require("../app/utils/getErrorMessage.js");

module.exports = function(req, res, next) {
  // request
  req.getContentType = () => {
    return req.get("Content-Type");
  };

  res.success = (res, data) => {
    return res.status(200).json({
      status: "success",
      code: 200,
      data: data || null
    });
  };

  res.fail = (res, data) => {
    res.status(400).json({
      status: "fail",
      code: 400,
      message: data || null
    });
  };

  res.authenticationError = (res, code, message) => {
    res.status(code).json({
      status: "fail",
      message: message || null,
      code: code || 401
    });
  };

  res.sendError = (res, err) => {
    const { code = 500, message = null } = getErrorMessage(err);
    res.status(code).json({
      status: "error",
      code: code,
      message: message
    });
  };

  res.successMessage = (res, message) => {
    res.status(200).json({
      status: "success",
      code: 200,
      message: message || null
    });
  };

  res.sendJsonHttpMessage = (status, data) => {
    res.sendJson(status, {
      message: http.STATUS_CODES[status],
      data: data
    });
  };

  res.sendJsonHttpMessageWithError = (res, status, err) => {
    res.sendJson(status, {
      status: status,
      request_id: req.requestId,
      data: null,
      error: err
    });
  };

  res.sendBadRequest = (res, err) => {
    res.sendJsonHttpMessageWithError(res, 400, err);
  };

  res.sendUnauthorize = () => {
    res.sendJsonHttpMessage(401);
  };

  res.sendNotFound = function() {
    res.sendJsonHttpMessage(404);
  };

  res.sendData = (data, message) => {
    res.sendJson(200, {
      status: "success",
      code: 200,
      request_id: req.requestId,
      data: data,
      message: message || null
    });
  };
  
  next();
};
