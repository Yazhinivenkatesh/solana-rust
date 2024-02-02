const express = require("express");
const voteRoute = require("../app/routes/vote.routes");
const routeMiddleware = require("../middleware/route.middleware")

module.exports = app => {

  // API Routes
  const voteApi = express.Router();
  app.use("/api/vote", voteApi);
  voteApi.use(routeMiddleware.authenticate)
  voteRoute.init(voteApi);

};
