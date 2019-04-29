import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProviderBrowser } from 'react-redux';

import App from './bootstrap';

import store from './store';

hydrate(
  <ReduxProviderBrowser store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProviderBrowser>,
  document.getElementById('root')
);
