import {UPDATE_THEME_COLOR} from './ActionTypes';

export function updateThemeColor(payload) {
  return {
    type: UPDATE_THEME_COLOR,
    payload: payload
  };
}
