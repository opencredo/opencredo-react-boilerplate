import {UPDATE_THEME_COLOR} from './ActionTypes';

export default function themeReducer(state = {color: '#5DC4C6'}, action) {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    default:
      return state;
  }
}
