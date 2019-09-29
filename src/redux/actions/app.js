import Types from '../types/app';
import {getUser} from '../../api/index.js';

export const addToFavorite = user => {
  return {
    type: Types.ADD_TO_FAVORITE,
    user,
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
