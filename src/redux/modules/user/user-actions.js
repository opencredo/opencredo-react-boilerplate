/* @flow */

import { User } from 'declarations/app';

export const SET_USER = Symbol('@@user/SET_USER');
export const CLEAR_USER = Symbol('@@user/CLEAR_USER');
export const LOCAL_STORAGE_KEY: string = 'redux:user';

type UserAction = {
  type: Symbol;
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
  let user: User|void;

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

export const clearUser = (): UserAction => {
  persistUser(null);

  return {
    type: CLEAR_USER,
    user: undefined,
  };
};
