import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WatchlistWhereInput = {
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  series?: SeriesWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
