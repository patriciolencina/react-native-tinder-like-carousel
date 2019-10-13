import {last} from 'ramda';
import types from '../types/app';
import appReducer from './app';
import {userData} from '../../../utils';
describe('users Reducer', () => {
  it('Should return default state', () => {
    const newState = appReducer(undefined, {});
    expect(newState).toEqual({users: [], error: null, favorite: []});
  });

  it('Should return new state if receiving type', () => {
    const user = userData;
    const newState = appReducer(undefined, {
      type: types.GET_USER_SUCCESS,
      user: user,
    });
    const newUser = last(newState.users);
    expect(newUser).toEqual(user);
  });
});
