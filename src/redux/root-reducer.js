import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import auth from './modules/auth/auth-reducer';
import { languageReducer as language } from './modules/language/language';
import { mainReducer as theme } from './modules/theme'; // We're using all-in-one version for testing

export default combineReducers({
  auth,
  language,
  theme,
  routing,
});
