require("dotenv").config();
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";

const app = express();

app.use(express.json());
app.use(morganMiddleware)
app.use("/api/", router);

const port = config.get<string>("port");

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
