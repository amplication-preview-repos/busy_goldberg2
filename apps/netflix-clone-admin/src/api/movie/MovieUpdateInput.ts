import { WatchlistUpdateManyWithoutMoviesInput } from "./WatchlistUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  releaseDate?: Date | null;
  title?: string | null;
  watchlists?: WatchlistUpdateManyWithoutMoviesInput;
};
