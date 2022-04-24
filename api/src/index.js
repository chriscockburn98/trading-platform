import express from "express";
import logger from "../global_helpers/logger.js";

import { establishMongoDBConnection } from "./config/databaseConnection.js";
import server from "./config/InitializeServer.js";

const app = express();
const port = process.env.PORT || 5000;

const startServer = async () => {
  establishMongoDBConnection();
  await server.start();

  server.applyMiddleware({
    app,
    path: "/api",
  });

  app.listen(port, "0.0.0.0", () => {
    logger.info(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

startServer();
