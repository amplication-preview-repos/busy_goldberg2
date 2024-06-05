import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MovieTitle } from "../movie/MovieTitle";
import { SeriesTitle } from "../series/SeriesTitle";
import { UserTitle } from "../user/UserTitle";

export const WatchlistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="movie.id" reference="Movie" label="Movie">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
        <ReferenceInput source="series.id" reference="Series" label="Series">
          <SelectInput optionText={SeriesTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
