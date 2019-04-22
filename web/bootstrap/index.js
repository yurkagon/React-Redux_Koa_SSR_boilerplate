import React from 'react';
import { Switch, Route } from "react-router-dom";

import routes from '~/web/routes';

const App = () => (
  <Switch>
    {routes.map(({ initialLoad, path, component: Component, ...data }) => (
      <Route
        key={path + 'route'}
        path={path}
        component={props => <Component initialLoad={initialLoad} {...props} />}
        {...data}
      />
    ))}
  </Switch>
);

export default App;
