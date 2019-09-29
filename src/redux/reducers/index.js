import {combineReducers} from 'redux';
import AppReducer from './app';
const reducers = {
  app: AppReducer,
};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;
