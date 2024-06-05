import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOVIE_TITLE_FIELD } from "../movie/MovieTitle";
import { SERIES_TITLE_FIELD } from "../series/SeriesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WatchlistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Watchlists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Movie" source="movie.id" reference="Movie">
          <TextField source={MOVIE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Series" source="series.id" reference="Series">
          <TextField source={SERIES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
