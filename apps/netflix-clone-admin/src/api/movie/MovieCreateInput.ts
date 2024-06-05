import { WatchlistCreateNestedManyWithoutMoviesInput } from "./WatchlistCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  releaseDate?: Date | null;
  title?: string | null;
  watchlists?: WatchlistCreateNestedManyWithoutMoviesInput;
};
