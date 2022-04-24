import pino from "pino";
import PinoPretty from "pino-pretty";

const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

const logger = pino(
  {
    customLevels: levels,
    useOnlyCustomLevels: true,
    level: "http",
  },
  PinoPretty({
    translateTime: pino.stdTimeFunctions.isoTime().slice(9,-2),
    timestamp: true,
    colorize: true,
    levelLabel: true,
    ignore: "pid,hostname",
  })
);

export default logger;
