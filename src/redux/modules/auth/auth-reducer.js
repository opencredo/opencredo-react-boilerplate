import debug from 'debug';

import {
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './auth-actions';

if (__DEBUG__) {
  debug.enable('redux:*');
}

const log = debug('redux:auth-reducer');

const initialState = {
  isAuthenticated: false,
};

const persistAuthState = (state) => localStorage.setItem('auth-state', JSON.stringify(state));

const getStoredAuthState = () => {
  let state;

  try {
    state = JSON.parse(localStorage.getItem('auth-state'));
  } catch (e) {
    log('Error loading auth state from local storage');
  }

  return state ? state : initialState;
};

const authReducer = (state = getStoredAuthState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_REQUEST:
      // save new state to localStorage
      const newState = Object.assign({}, action.state);
      persistAuthState(newState);
      log('newState =>', newState);
      return newState;
    default:
      return state;
  }
};

export default authReducer;
