import { JsonValue } from "type-fest";
import { Watchlist } from "../watchlist/Watchlist";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  watchlists?: Array<Watchlist>;
};
