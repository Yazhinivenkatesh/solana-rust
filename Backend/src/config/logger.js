const { createLogger, format, transports } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const transport = new DailyRotateFile({
  filename: "logs//" + "backend%DATE%.log",
  datePattern: "DD-MM-YYYY",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "DD-MM-YYYY, h:mm:ss a" }),
    format.printf((info) => JSON.stringify(info))
  ),
  transports: [transport, new transports.Console()],
  exitOnError: false,
});

module.exports = logger;
