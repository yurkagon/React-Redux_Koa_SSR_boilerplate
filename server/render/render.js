import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProviderServer } from 'react-redux';

import template from './template';

import App from '~/web/bootstrap';
import createStore from '~/web/store';

import webRoutes from '~/web/routes';

const render = async (url) => {
  const store = createStore();

  const matchedRoute = webRoutes.find(route => matchPath(url, route)) || {};

  if (matchedRoute.initialLoad) {
    await store.dispatch(matchedRoute.initialLoad());
  }

  const html = renderToString(
    <ReduxProviderServer store={store}>
      <StaticRouter context={{}} location={url} >
        <App />
      </StaticRouter>
    </ReduxProviderServer>
  );

  const rendered = template({
    html,
    state: store.getState()
  });

  return rendered;
}

export default render;
