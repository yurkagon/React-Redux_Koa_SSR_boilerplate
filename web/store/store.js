// only browser
import createStore from './createStore';

const deleteInitialReduxData = () => {
  delete window.__REDUX_DATA__;

  const element = document.getElementById('redux-data-script');
  element.parentNode.removeChild(element);
}

const store = createStore(window.__REDUX_DATA__);

deleteInitialReduxData();

export default store;
