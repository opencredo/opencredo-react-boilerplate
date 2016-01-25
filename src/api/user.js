/* @flow */

import axios from 'axios';
import { User } from 'declarations/app';

export const getProfile = (): Promise<User> => {
  return axios.get('/api/profile.json').then(response => response.data);
};

export const updateProfile = (user: User): Promise<User> => {
  // NOTE: this is where the actual `PUT` http request would be called:
  // it is mocked here in order to keep things simple (ie, no actual service needs to be built)
  return new Promise((resolve) => resolve(user));
};
