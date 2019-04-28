import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProviderBrowser } from 'react-redux';

import App from './bootstrap';
import createStore from './store';

const store = createStore(window.__REDUX_DATA__);

// const deleteInitialReduxData = () => {
//   delete window.__REDUX_DATA__;

//   const element = document.getElementById('redux-data-script');
//   element.parentNode.removeChild(element);
// }
// deleteInitialReduxData();

hydrate(
  <ReduxProviderBrowser store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProviderBrowser>,
  document.getElementById('root')
);
