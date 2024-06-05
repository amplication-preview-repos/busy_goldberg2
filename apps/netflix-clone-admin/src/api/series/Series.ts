import { Watchlist } from "../watchlist/Watchlist";

export type Series = {
  createdAt: Date;
  description: string | null;
  genre?: "Option1" | null;
  id: string;
  releaseDate: Date | null;
  title: string | null;
  updatedAt: Date;
  watchlists?: Array<Watchlist>;
};
