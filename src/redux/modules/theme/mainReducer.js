import themeReducer from './themeReducer';

export default function mainReducer(state = {}, action) {
  return {
    theme: themeReducer(state.theme, action)
  };
}
