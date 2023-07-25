import express from "express";
import { housesApi } from "./houses.api.js";
import path from "path";
import url from "url";

const app = express();
app.use(express.json());

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use("/", express.static(path.resolve(__dirname, "../public")));

app.use(async (req, res, next) => {
  console.log(req.url);
  next();
});
app.use("/api/houses", housesApi);

app.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log("Server ready at port 3000");
});
