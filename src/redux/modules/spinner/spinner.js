/* @flow */
import debug from 'debug';

type SpinnerState = {
  canShow: boolean;
  messageId: ?string;
};

type SpinnerAction = {
  type: Symbol;
  messageId: ?string;
};

export const SHOW_SPINNER: Symbol = Symbol('@@spinner/SHOW_SPINNER');
export const HIDE_SPINNER: Symbol = Symbol('@@spinner/HIDE_SPINNER');

export const DEFAULT_SPINNER_STATE: SpinnerState = {
  canShow: false,
  messageId: 'please_wait',
};

if (__DEBUG__) {
  debug.enable('spinner-reducer:*');
}

const log = debug('spinner-reducer:debug');

export function showSpinner(messageId: string): SpinnerAction {
  return {
    type: SHOW_SPINNER,
    messageId,
  };
}

export function hideSpinner(): SpinnerAction {
  return {
    type: HIDE_SPINNER,
    messageId: null,
  };
}

export function spinnerReducer(state : SpinnerState = DEFAULT_SPINNER_STATE, action: any): any {
  let newState: SpinnerState;

  switch (action.type) {
    case SHOW_SPINNER:
      newState = Object.assign(
        {},
        {
          canShow: true,
          messageId: action.messageId,
        }
      );
      break;
    case HIDE_SPINNER:
      newState = Object.assign({}, DEFAULT_SPINNER_STATE);
      break;
    default:
      newState = state;
  }

  if (newState !== state) {
    // only log if state has changed
    log('action:', action, 'state:', state, 'newState:', newState);
  }

  return newState;
}
