import {mapUser} from './auth-helpers';

export const SHOW_LOGIN = '@@auth/SHOW_LOGIN';

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';

export const showLogin = () => ({
  type: SHOW_LOGIN,
});

export const loginSuccess = (profile, token) => ({
  type: LOGIN_SUCCESS,
  state: {
    isAuthenticated: true,
    user: mapUser(profile),
    token,
  },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
  state: {
    isAuthenticated: false,
  },
});

export const LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST';

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  state: {
    isAuthenticated: false,
  },
});
