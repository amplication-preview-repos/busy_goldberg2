import { WatchlistCreateNestedManyWithoutSeriesItemsInput } from "./WatchlistCreateNestedManyWithoutSeriesItemsInput";

export type SeriesCreateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  releaseDate?: Date | null;
  title?: string | null;
  watchlists?: WatchlistCreateNestedManyWithoutSeriesItemsInput;
};
