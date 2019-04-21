import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '~/web/components/Home';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={() => 'about'} />
    <Route component={() => '404'} />
  </Switch>
);

export default App;
