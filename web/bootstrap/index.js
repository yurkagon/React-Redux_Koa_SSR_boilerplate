import React from 'react';
import { Switch, Route } from "react-router-dom";

import routes from '~/web/routes';

const App = () => (
  <Switch>
    {routes.map((data, index) => (
      <Route key={index} {...data} />
    ))}
  </Switch>
);

export default App;
