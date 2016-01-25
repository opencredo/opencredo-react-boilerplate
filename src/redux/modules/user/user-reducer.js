import debug from 'debug';
import {
  getUser,
  SET_USER,
  UPDATE_USER,
  CLEAR_USER,
} from './user-actions';

if (__DEBUG__) {
  debug.enable('user-reducer:*');
}

const log = debug('user-reducer:debug');

const userReducer = (state = getUser(), action) => {
  log('type:', action.type, 'user:', action.user);
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.user);
    case UPDATE_USER:
      return Object.assign({}, action.user);
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
