/* @flow */
import debug from 'debug';
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from 'redux/modules/user/user-actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from 'redux/modules/auth/auth-actions';

type SpinnerState = {
  canShow: boolean;
  message: string;
};

export const DEFAULT_SPINNER_STATE: SpinnerState = {
  canShow: false,
  message: '',
};

if (__DEBUG__) {
  debug.enable('spinner-reducer:*');
}

const log = debug('spinner-reducer:debug');

const spinnerReducer = (state : SpinnerState = DEFAULT_SPINNER_STATE, action: any): any => {
  let newState: SpinnerState;

  switch (action.type) {
    case UPDATE_USER_REQUEST:
      // TODO: i18n for `message`
      // TODO: where should the value for `message` be set?
      newState = Object.assign(
        {},
        action.state,
        {
          canShow: true,
          message: 'Updating user details...',
        }
      );
      break;
    case UPDATE_USER_SUCCESS:
      newState = Object.assign({}, action.state, DEFAULT_SPINNER_STATE);
      break;
    case UPDATE_USER_FAILURE:
      newState = Object.assign({}, action.state, DEFAULT_SPINNER_STATE);
      break;
    case LOGIN_REQUEST:
      // TODO: i18n for `message`
      // TODO: where should the value for `message` be set?
      newState = Object.assign(
        {},
        action.state,
        {
          canShow: true,
          message: 'Logging in...',
        }
      );
      break;
    case LOGIN_SUCCESS:
      newState = Object.assign({}, action.state, DEFAULT_SPINNER_STATE);
      break;
    case LOGIN_FAILURE:
      newState = Object.assign({}, action.state, DEFAULT_SPINNER_STATE);
      break;
    case LOGOUT_REQUEST:
      // TODO: i18n for `message`
      // TODO: where should the value for `message` be set?
      newState = Object.assign(
        {},
        action.state,
        {
          canShow: true,
          message: 'Logging out...',
        }
      );
      break;
    case LOGOUT_SUCCESS:
      newState = Object.assign({}, action.state, DEFAULT_SPINNER_STATE);
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

export default spinnerReducer;
