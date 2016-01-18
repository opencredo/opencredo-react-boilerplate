export const SHOW_LOGIN = '@@auth/SHOW_LOGIN';
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';
export const LOCAL_STORAGE_KEY = 'redux:auth';

const initialState = {
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

export const showLogin = () => ({
  type: SHOW_LOGIN,
});

export const loginSuccess = () => {
  const state = {
    isAuthenticated: true,
    isAdmin: true,
    user: {
      userId: '1',
      name: 'John Doe',
      givenName: 'John',
      familyName: 'Doe',
      nickname: 'john.doe',
      picture: '/images/profile-picture.jpg',
      email: 'john.doe@example.eg',
      emailVerified: true,
      roles: ['admin'],
      createdAt: '2016-01-01T00:00:00.000Z',
      updatedAt: '2016-01-01T00:00:00.000Z',
      locale: 'en-GB',
    },
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
