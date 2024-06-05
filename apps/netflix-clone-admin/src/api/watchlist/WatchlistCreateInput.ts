import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WatchlistCreateInput = {
  movie?: MovieWhereUniqueInput | null;
  series?: SeriesWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
