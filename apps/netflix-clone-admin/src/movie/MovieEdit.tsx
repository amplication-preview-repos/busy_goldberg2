import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WatchlistTitle } from "../watchlist/WatchlistTitle";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="genre"
          label="genre"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="watchlists"
          reference="Watchlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WatchlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
