import {mapUser} from './auth-helpers';

// login actions
export const SHOW_LOGIN = '@@auth/SHOW_LOGIN';
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';

export const ADMIN_ROLE = 'admin';

export const showLogin = () => ({
  type: SHOW_LOGIN,
});

export const loginSuccess = (profile, token) => {
  return {
    type: LOGIN_SUCCESS,
    state: {
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
        createdAt: '2016-01-01T00:00:00.000Z',
        locale: 'en-GB'
      },
      // fake / exmaple token:
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29jdm1mLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwOTMwMTAyNTIzMzE4MzUzMDM5OSIsImF1ZCI6IlpnNE1XbmhtUmtkbVJaaVpvNk9ESHppc1lubkNTbUlEIiwiZXhwIjoxNDUzMTQ2MDk2LCJpYXQiOjE0NTMxMTAwOTZ9.eR9pF2TskSizzvGKr7KD_Biiyw-X1JcGuGtTQ4W4UYw',
    },
  }
};

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
