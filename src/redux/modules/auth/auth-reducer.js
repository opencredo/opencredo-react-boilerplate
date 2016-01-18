import {
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './auth-actions';

import debug from 'debug';

if (__DEBUG__) {
  debug.enable('redux:*');
}

const initialState = {
  isAuthenticated: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, action.state);
    case LOGIN_FAILURE:
      return Object.assign({}, state, action.state);
    case LOGOUT_REQUEST:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
};

export default authReducer;
