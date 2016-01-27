import debug from 'debug';
import {
  getState,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './auth-actions';

if (__DEBUG__) {
  debug.enable('auth-reducer:*');
}

const log = debug('auth-reducer:debug');

const authReducer = (state = getState(), action) => {
  let newState;

  switch (action.type) {
    case LOGIN_SUCCESS:
      newState = Object.assign({}, action.state);
      break;
    case LOGIN_FAILURE:
      newState = Object.assign({}, action.state);
      break;
    case LOGOUT_REQUEST:
      newState = Object.assign({}, action.state);
      break;
    default:
      newState = state;
  }

  if (newState !== state) {
    // only log if state has changed
    log('action:', action, 'state:', state, 'newState:', newState);
  }

  return newState;
};

export default authReducer;
