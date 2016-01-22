import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import auth from './modules/auth/auth-reducer';
import { languageReducer as language } from './modules/language/language';

export default combineReducers({
  auth,
  language,
  routing,
});
