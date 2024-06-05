import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WatchlistListRelationFilter } from "../watchlist/WatchlistListRelationFilter";

export type MovieWhereInput = {
  description?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  watchlists?: WatchlistListRelationFilter;
};
