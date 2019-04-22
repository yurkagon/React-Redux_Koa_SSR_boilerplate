import { combineReducers } from 'redux';
import homeReducer from './home';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer
