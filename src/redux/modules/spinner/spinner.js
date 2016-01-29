/* @flow */
import debug from 'debug';

type SpinnerState = {
  canShow: boolean;
  messageId: ?string;
};

type SpinnerAction = {
  type: string;
  state: SpinnerState;
};

export const SHOW_SPINNER: string = '@@spinner/SHOW_SPINNER';
export const HIDE_SPINNER: string = '@@spinner/HIDE_SPINNER';

export const DEFAULT_SPINNER_STATE: SpinnerState = {
  canShow: false,
  messageId: null,
};

if (__DEBUG__) {
  debug.enable('spinner-reducer:*');
}

const log = debug('spinner-reducer:debug');

export function showSpinner(messageId: string): SpinnerAction {
  return {
    type: SHOW_SPINNER,
    state: {
      canShow: true,
      messageId,
    },
  };
}

export function hideSpinner(): SpinnerAction {
  return {
    type: HIDE_SPINNER,
    state: DEFAULT_SPINNER_STATE,
  };
}

export function spinnerReducer(
  state : SpinnerState = DEFAULT_SPINNER_STATE,
  action: any): SpinnerState {
  let newState: SpinnerState = state;

  switch (action.type) {
    case SHOW_SPINNER:
    case HIDE_SPINNER:
      newState = Object.assign({}, state, action.state);
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
