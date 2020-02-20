import { combineReducers } from 'redux';
import dataoneReducer from './getdataone';
import datatwoReducer from './getdatatwo';

export default combineReducers({
  one:dataoneReducer,
  two:datatwoReducer
});