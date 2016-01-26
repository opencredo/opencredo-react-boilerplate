/* @flow */

import { getProfile } from 'api/user';
import { setUser, clearUser } from '../user/user-actions';

export const LOGIN_REQUEST = Symbol('@@auth/LOGIN_REQUEST');
export const LOGIN_SUCCESS = Symbol('@@auth/LOGIN_SUCCESS');
export const LOGIN_FAILURE = Symbol('@@auth/LOGIN_FAILURE');
export const LOGOUT_REQUEST = Symbol('@@auth/LOGOUT_REQUEST');
export const LOGOUT_SUCCESS = Symbol('@@auth/LOGOUT_SUCCESS');
export const LOCAL_STORAGE_KEY = 'redux:auth';

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  token: ?string;
};

type AuthAction = {
  type: Symbol;
  state: ?AuthState;
};

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  isAdmin: false,
  token: null,
};

const persistState = (state: ?AuthState) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

export const getState = (): AuthState => {
  const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  let state: ?AuthState;

  if (storedState) {
    state = JSON.parse(storedState);
  } else {
    state = initialState;
  }

  return state;
};

export const loginSuccess = (): AuthAction => {
  const state = {
    isLoading: false,
    isAuthenticated: true,
    isAdmin: true,
    token: 'eyJ0eXAasdfiOi',
  };

  persistState(state);

  return {
    type: LOGIN_SUCCESS,
    state,
  };
};

export const loginFailure = (): AuthAction => {
  persistState(initialState);

  return {
    type: LOGIN_FAILURE,
    state: initialState,
  };
};

export const loginRequest = (): Function => {
  // Returning a function works because `redux-thunk` middleware is installed:
  // https://github.com/gaearon/redux-thunk
  // See `configure-store.js`.
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      state: {
        isLoading: true,
        isAuthenticated: false,
      },
    });

    getProfile().then(
      response => {
        // insert a short delay to simulate service call delay - remove in real application
        setTimeout(() => dispatch(loginSuccess(response)), 700);
        dispatch(setUser(response));
      },
      () => {
        dispatch(loginFailure());
        dispatch(clearUser());
      }
    );
  };
};

export const logoutRequest = (): Function => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST,
    });

    // insert a short delay to simulate service call delay - remove in real application
    setTimeout(() => {
      persistState(initialState);
      dispatch(clearUser());
      dispatch({
        type: LOGOUT_SUCCESS,
        state: initialState,
      });
    }, 700);
  };
};
