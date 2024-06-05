import { WatchlistUpdateManyWithoutSeriesItemsInput } from "./WatchlistUpdateManyWithoutSeriesItemsInput";

export type SeriesUpdateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  releaseDate?: Date | null;
  title?: string | null;
  watchlists?: WatchlistUpdateManyWithoutSeriesItemsInput;
};
