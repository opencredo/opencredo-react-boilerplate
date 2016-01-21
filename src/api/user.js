const fetch = (window.fetch) ? window.fetch : require('fetch-polyfill');

export const getProfile = () => {
  return fetch('/api/profile.json').then(success => success.json());
};
