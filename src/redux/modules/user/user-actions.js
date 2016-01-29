/* @flow */

import { User } from 'declarations/app';

import { updateProfile } from 'api/user';
import { showSpinner, hideSpinner } from '../spinner/spinner';

export const SET_USER = '@@user/SET_USER';
export const CLEAR_USER = '@@user/CLEAR_USER';
export const UPDATE_USER_REQUEST = '@@user/UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = '@@user/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = '@@user/UPDATE_USER_FAILURE';
export const LOCAL_STORAGE_KEY:string = 'redux:user';

type UserAction = {
  type: string;
  user: ?User;
};

const initialUser: User = {
  userId: '',
  name: '',
  givenName: '',
  familyName: '',
  nickname: '',
  picture: '',
  email: '',
  emailVerified: false,
  roles: [],
  createdAt: '',
  updatedAt: '',
  locale: '',
};

const persistUser = (user: ?User) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getUser = (): ?User => {
  const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
  let user: ?User;

  if (storedUser) {
    user = JSON.parse(storedUser);
  } else {
    user = initialUser;
  }

  return user;
};

export const setUser = (user: ?User): UserAction => {
  persistUser(user);

  return {
    type: SET_USER,
    user,
  };
};

export const updateUserSuccess = (user: User): UserAction => {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
};

export const updateUserFailure = (): UserAction => {
  return {
    type: UPDATE_USER_FAILURE,
    user: null,
  };
};

export const updateUser = (user: User): Function => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      user,
    });
    dispatch(showSpinner('updating_user_details'));

    updateProfile(user).then(
      response => {
        dispatch(updateUserSuccess(response));
        dispatch(hideSpinner());
        dispatch(setUser(response));
      },
      () => {
        dispatch(updateUserFailure());
        dispatch(hideSpinner());
      }
    );
  };
};

export const clearUser = ():UserAction => {
  persistUser(null);

  return {
    type: CLEAR_USER,
    user: undefined,
  };
};
