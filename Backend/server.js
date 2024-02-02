"use strict";

const express = require("express"),
  app = express(),
  helmet = require("helmet"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  logger = require("./src/config/logger"),
  { corsOptions } = require("./src/app/utils/constants.js")


app.use(cors(corsOptions));

app.use(helmet());

app.use(express.json({ limit: "2mb" }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//initialize response middleware
app.use(require("./src/middleware/response-middleware.js"));

//Log
logger.log({ level: "info", message: { info: "App started..." } });

// starting up routes
require("./src/startup/routes.js")(app);

console.log(`Running ${process.env.NODE_ENV} environment`);

let server = app.listen(process.env.PORT, () =>
  console.log(`Rest Server is running on port ${process.env.PORT} !`)
);

server.timeout = 60000