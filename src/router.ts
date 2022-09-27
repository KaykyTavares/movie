import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API WORKING");
  })
  .post("/movie", createMovie);
