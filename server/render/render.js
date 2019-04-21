import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import template from './template';

import App from '~/web/bootstrap';

const render = url => {
  const reactDom = renderToString(
    <StaticRouter context={{}} location={url} >
      <App />
    </StaticRouter>
  );

  const rendered = template(reactDom);

  return rendered;
}

export default render;
