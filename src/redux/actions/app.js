import Types from '../types/app';
import {getUser} from '../../api/index.js';

export const dummyReduxEvent = () => {
  return {
    type: Types.DUMMY_REDUX_EVENT,
  };
};

export const getUserAttempt = () => async dispatch => {
  return getUser().then(
    user =>
      dispatch({
        type: Types.GET_USER_SUCCESS,
        user,
      }),
    error =>
      dispatch({
        type: Types.GET_USER_ERROR,
        error,
      }),
  );
};
