import {createAction, handleActions} from 'redux-actions';

// Constants
export const PRINT_HELLO_WORLD = 'PRINT_HELLO_WORLD';

// Actions
export const hello = createAction(PRINT_HELLO_WORLD, (value = 'World') => `Hello ${value}`);

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!

export const delayedHello = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(hello(getState().name));
    }, 1000);
  };
};

export const actions = {
  hello,
  delayedHello,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [PRINT_HELLO_WORLD]: (state, {payload}) => payload,
}, 1);
