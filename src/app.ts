import express from "express";
import config from "config";

const app = express();

app.use(express.json());

const port = config.get<string>("port");

app.listen(port, async () => {
  console.log(`Aplicação está funcionando na porta: ${port}`);
});
