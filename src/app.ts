import express from "express";
import config from "config";
import router from "./router"

const app = express();

app.use(express.json());
app.use("/api/", router)

const port = config.get<string>("port");

app.listen(port, async () => {
  console.log(`Aplicação está funcionando na porta: ${port}`);
});
