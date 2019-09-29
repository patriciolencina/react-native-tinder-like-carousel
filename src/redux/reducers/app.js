import {append, drop} from 'ramda';
import Types from '../types/app';

const initialState = {users: [], error: null};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_SUCCESS:
      const users = drop(state.users.length - 4, state.users);
      return {...state, users: append(action.user, users)};
    case Types.GET_USER_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
