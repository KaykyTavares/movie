import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
} from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API WORKING");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", removeMovie);
