import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SeriesList } from "./series/SeriesList";
import { SeriesCreate } from "./series/SeriesCreate";
import { SeriesEdit } from "./series/SeriesEdit";
import { SeriesShow } from "./series/SeriesShow";
import { MovieList } from "./movie/MovieList";
import { MovieCreate } from "./movie/MovieCreate";
import { MovieEdit } from "./movie/MovieEdit";
import { MovieShow } from "./movie/MovieShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { WatchlistList } from "./watchlist/WatchlistList";
import { WatchlistCreate } from "./watchlist/WatchlistCreate";
import { WatchlistEdit } from "./watchlist/WatchlistEdit";
import { WatchlistShow } from "./watchlist/WatchlistShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NetflixClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Series"
          list={SeriesList}
          edit={SeriesEdit}
          create={SeriesCreate}
          show={SeriesShow}
        />
        <Resource
          name="Movie"
          list={MovieList}
          edit={MovieEdit}
          create={MovieCreate}
          show={MovieShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Watchlist"
          list={WatchlistList}
          edit={WatchlistEdit}
          create={WatchlistCreate}
          show={WatchlistShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
