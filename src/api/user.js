/* @flow */

import axios from 'axios';
import { User } from 'declarations/app';

export const getProfile = (): Promise<User> => {
  return axios.get('/api/profile.json').then(response => response.data);
};

export const updateProfile = (user: User): Promise<User> => {
  // NOTE: this is where the actual `PUT` http request would be called:
  // it is mocked here in order to keep things simple (ie, no actual service needs to be built)
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  return new Promise((resolve) => resolve(user));
  // So to simulate an http request that fails:
  // return new Promise((resolve, reject) => reject());
};
