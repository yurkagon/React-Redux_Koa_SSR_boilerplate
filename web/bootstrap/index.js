import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '~/web/components/Home';
import About from '~/web/components/About';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route component={() => '404'} />
  </Switch>
);

export default App;
