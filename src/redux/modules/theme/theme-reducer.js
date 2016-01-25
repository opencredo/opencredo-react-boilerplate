import {
  updateThemeColor,
  UPDATE_THEME_COLOR,
} from './theme-actions';

const themeReducer = (state = {color: '#5DC4C6'}, action) => {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    default:
      return state;
  }
};

export default function mainReducer(state = {}, action) {
  return {
    theme: themeReducer(state.theme, action)
  };
}
