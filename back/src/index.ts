import express from "express";
import cookieParser from "cookie-parser";
import { housesApi } from "./houses.api.js";
import path from "path";
import url from "url";
import { createRestApiServer } from "./core/servers/rest-api.server.js";
import { envConstants } from "./core/constants/index.js";
const restApiServer = createRestApiServer();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));
restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});
restApiServer.use("/api/houses", housesApi);

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
