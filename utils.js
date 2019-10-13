import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};
