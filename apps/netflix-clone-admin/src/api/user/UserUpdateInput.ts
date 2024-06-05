import { InputJsonValue } from "../../types";
import { WatchlistUpdateManyWithoutUsersInput } from "./WatchlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  watchlists?: WatchlistUpdateManyWithoutUsersInput;
};
