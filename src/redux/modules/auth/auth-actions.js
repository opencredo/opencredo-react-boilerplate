import { getProfile } from 'api/user';

export const LOGIN_REQUEST = Symbol('@@auth/LOGIN_REQUEST');
export const LOGIN_SUCCESS = Symbol('@@auth/LOGIN_SUCCESS');
export const LOGIN_FAILURE = Symbol('@@auth/LOGIN_FAILURE');
export const LOCAL_STORAGE_KEY = 'redux:auth';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
};

const persistState = (state) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

export const getState = () => {
  try {
    const state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return state ? state : initialState;
  } catch (e) {
    return initialState;
  }
};

export const loginSuccess = (response) => {
  const state = {
    isLoading: false,
    isAuthenticated: true,
    isAdmin: true,
    user: response,
    token: 'eyJ0eXAasdfiOi',
  };

  persistState(state);

  return {
    type: LOGIN_SUCCESS,
    state,
  };
};

export const loginFailure = () => {
  const state = {
    isAuthenticated: false,
  };

  persistState(state);

  return {
    type: LOGIN_FAILURE,
    state,
  };
};

export const loginRequest = () => {
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
        dispatch(loginSuccess(response));
      },
      () => {
        dispatch(loginFailure());
      }
    );
  };
};

export const LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST';

export const logoutRequest = () => {
  const state = {
    isAuthenticated: false,
  };

  persistState(state);

  return {
    type: LOGOUT_REQUEST,
    state,
  };
};
