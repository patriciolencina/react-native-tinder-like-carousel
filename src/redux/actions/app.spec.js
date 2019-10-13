import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock';
import * as actions from './app';
import Types from '../types/app';
import {urlAPI} from '../../api/index.js';
import {userData, userJSONString} from '../../../mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test getUserAttempt action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching users has been done', () => {
    fetchMock.mock(urlAPI, userJSONString);
    const expectedActions = [{type: Types.GET_USER_SUCCESS, user: userData}];
    const store = mockStore({users: []});

    return store.dispatch(actions.getUserAttempt()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('test addToFavorite action', () => {
  it('should create an action to add a Favorite', () => {
    const user = userData;
    const expectedAction = {
      type: Types.ADD_TO_FAVORITE,
      user,
    };
    expect(actions.addToFavorite(user)).toEqual(expectedAction);
  });
});
