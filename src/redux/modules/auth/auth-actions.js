/* @flow */

import { getProfile } from 'api/user';
import { setUser, clearUser } from '../user/user-actions';
import { showSpinner, hideSpinner } from '../spinner/spinner';

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';
export const LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@auth/LOGOUT_SUCCESS';
export const LOCAL_STORAGE_KEY = 'redux:auth';

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  token: ?string;
};

type AuthAction = {
  type: string;
  state: ?AuthState;
};

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  isAdmin: false,
  token: null,
};

const loginRequestAction: AuthAction = {
  type: LOGIN_REQUEST,
  state: initialState,
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
  return dispatch => {
    dispatch(loginRequestAction);
    dispatch(showSpinner('logging_in'));

    getProfile().then(
      response => {
        // insert a short delay to simulate service call delay - remove in real application
        setTimeout(() => {
          dispatch(loginSuccess(response));
          dispatch(hideSpinner());
          dispatch(setUser(response));
        }, 700);
      },
      () => {
        dispatch(loginFailure());
        dispatch(hideSpinner());
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
    dispatch(showSpinner('logging_out'));

    // insert a short delay to simulate service call delay - remove in real application
    setTimeout(() => {
      persistState(initialState);
      dispatch(clearUser());
      dispatch(hideSpinner());
      dispatch({
        type: LOGOUT_SUCCESS,
        state: initialState,
      });
    }, 700);
  };
};
