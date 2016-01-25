import debug from 'debug';
import {
  getUser,
  SET_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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
    case UPDATE_USER_REQUEST:
      return Object.assign({}, action.user);
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, action.user);
    case UPDATE_USER_FAILURE:
      // NOTE: this is not essential, but it's useful to explicitly define
      return state;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
