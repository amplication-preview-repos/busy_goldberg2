import { InputJsonValue } from "../../types";
import { WatchlistCreateNestedManyWithoutUsersInput } from "./WatchlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  watchlists?: WatchlistCreateNestedManyWithoutUsersInput;
};
