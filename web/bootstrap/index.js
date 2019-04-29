import React from 'react';
import { Switch, Route } from "react-router-dom";

import routes from '~/web/routes';

const App = () => (
  <Switch>
    {routes.map(({ path, ...data }) => (
      <Route
        key={path + 'route'}
        path={path}
        {...data}
      />
    ))}
  </Switch>
);

export default App;
