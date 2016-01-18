export const SHOW_LOGIN = '@@auth/SHOW_LOGIN';

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';

export const showLogin = () => ({
  type: SHOW_LOGIN,
});

export const loginSuccess = () => {
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
        updatedAt: '2016-01-01T00:00:00.000Z',
        locale: 'en-GB',
      },
      token: 'eyJ0eXAasdfiOi',
    },
  };
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
