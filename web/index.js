import React from 'react';
import { hydrate } from 'react-dom';

import App from './bootstrap';

hydrate(<App />, document.getElementById('root'));
