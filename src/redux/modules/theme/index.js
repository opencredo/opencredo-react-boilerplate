const UPDATE_THEME_COLOR = 'UPDATE_THEME_COLOR';
//const LOCAL_STORAGE_KEY = 'redux:theme:color';
//const DEFAULT_THEME_COLOR = '#5DC4C6';

//type ThemeAction = {
//  type: string;
//payload: payload;
//};

//const initialState = {
//  color: '#5DC4C6',
//};
//
//const persistState = (state) => {
//  localStorage.setItem(LOCAL_STORAGE_KEY);
//};
//
//function getTheme() {
//  const theme = localStorage.getItem(LOCAL_STORAGE_KEY);
//  return theme ? theme : DEFAULT_THEME_COLOR;
//}

export function updateThemeColor(payload) {
  // localStorage.setItem(LOCAL_STORAGE_KEY, theme.color);
  return {
    type: UPDATE_THEME_COLOR,
    payload: payload
  };
}


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
