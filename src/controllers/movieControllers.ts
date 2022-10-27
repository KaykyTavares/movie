import { Request, Response } from "express";
import { MovieModel } from "../model/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
  }
}
