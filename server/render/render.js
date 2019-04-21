import React from "react";
import { renderToString } from "react-dom/server";

import template from './template';

import App from '~/web/bootstrap';

const render = url => {
  const reactDom = renderToString(<App />);

  const rendered = template(reactDom);

  return rendered;
}

export default render;
