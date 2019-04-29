import React from 'react';
import Home from '~/web/components/Home';
import About from '~/web/components/About';

export default [
  {
    component: Home,
    path: '/home',
    // exact: true
  },
  {
    component: About,
    path: '/about',
    exact: true
  },
  {
    component: () => (
      <div className="text-center">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    ),
  }
];
