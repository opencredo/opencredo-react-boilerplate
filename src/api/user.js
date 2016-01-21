import axios from 'axios';

export const getProfile = () => {
  return axios.get('/api/profile.json').then(response => response.data);
};
