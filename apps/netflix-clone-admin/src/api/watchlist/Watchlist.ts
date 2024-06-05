import { Movie } from "../movie/Movie";
import { Series } from "../series/Series";
import { User } from "../user/User";

export type Watchlist = {
  createdAt: Date;
  id: string;
  movie?: Movie | null;
  series?: Series | null;
  updatedAt: Date;
  user?: User | null;
};
