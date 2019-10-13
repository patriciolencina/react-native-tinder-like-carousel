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

export const userData = {
  gender: 'female',
  name: {
    title: 'ms',
    first: 'kaylee',
    last: 'stone',
  },
  location: {
    street: '4096 oak ridge ln',
    city: 'addison',
    state: 'north carolina',
    zip: '44919',
  },
  email: 'kaylee.stone82@example.com',
  username: 'ticklishbutterfly105',
  password: '010203',
  salt: 'gVDO6CZo',
  md5: '1d7fdf65284811efdc1c66214ac7fbed',
  sha1: '3a5f03262bfb97e05e693240b00d231902e8d220',
  sha256: 'ed6c2716816050396bdf221b42ec1422854ccdffa369218aeca23e74932741c1',
  registered: '1280639553',
  dob: '29281739',
  phone: '(177)-904-9659',
  cell: '(523)-897-6914',
  SSN: '595-10-4815',
  picture: 'http://api.randomuser.me/portraits/women/72.jpg',
};
