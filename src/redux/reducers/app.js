import Types from '../types/app';

const initialState = {user: {}, error: null};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_SUCCESS:
      return {...state, user: action.user};
    case Types.GET_USER_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
