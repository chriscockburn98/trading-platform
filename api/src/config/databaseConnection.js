import mongoose from "mongoose";
import logger from "../../global_helpers/logger.js";

const DB_URI = process.env.DB_URI;

const connect = () =>
  mongoose.createConnection(DB_URI, {
    autoIndex: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 30000,
  });

const establishMongoDBConnection = async () => {
  const db = connect();

  db.on("open", () => {
    logger.info(`⚡ Connected to MongoDB`);
  });

  db.on("error", (err) => {
    logger.fatal(`MongoDB error: ${err}`);
    logger.fatal(`Server exiting...`);
    process.exit(0);
  });

  db.on("disconnected", () => {
    console.error("Mongoose default connection disconnected");
  });

  global.databaseConnection = db;
};

export { establishMongoDBConnection };
