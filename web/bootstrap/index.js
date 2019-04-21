import React from 'react';
import { Switch, Route } from "react-router-dom";

const App = () => (
  <Switch>
    <Route path="/" exact component={() => 'home'} />
    <Route path="/about" exact component={() => 'about'} />
    <Route component={() => '404'} />
  </Switch>
);

export default App;
