import createStore from './createStore';
import { IS_BROWSER_ENVIRONMENT } from '~/utils';

// only in browser
IS_BROWSER_ENVIRONMENT();

const deleteInitialReduxData = () => {
  delete window.__REDUX_DATA__;

  const element = document.getElementById('redux-data-script');
  element.parentNode.removeChild(element);
}

const store = createStore(window.__REDUX_DATA__);

deleteInitialReduxData();

export default store;
