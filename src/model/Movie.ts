import {model, Schema} from "mongoose"

const movieSchema = new Schema(
  {
    title: {type: String},
    reting: {type: Number},
    description: {type: String},
    director: {type: String},
    stars: {type: Array},
    poster: {type: String}
  },
  {
    timestamps: true
  }
)

export const MovieModel = model("Movie", movieSchema);
