import debug from 'debug';

import {
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './auth-actions';

if (__DEBUG__) {
  debug.enable('redux:*');
}

const log = debug('redux:auth-reducer');

const persistAuthState = (state) => localStorage.setItem('auth-state', JSON.stringify(state));

const getStoredAuthState = () => {
  try {
    return JSON.parse(localStorage.getItem('auth-state'));
  } catch (e) {
    log('Error loading auth state from local storage');
    return {
      isAuthenticated: false,
      isFetching: false,
    };
  }
};

const authReducer = (state = getStoredAuthState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_REQUEST:
      // save new state to localStorage
      const newState = Object.assign({}, state, action.state);
      persistAuthState(newState);
      return newState;
    default:
      return state;
  }
};

export default authReducer;
