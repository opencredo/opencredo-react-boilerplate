import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import { documentTitleReducer as documentTitle } from './modules/document-title/document-title';
import { spinnerReducer as spinner } from './modules/spinner/spinner';
import { languageReducer as language } from './modules/language/language';
import { reducer as form } from 'redux-form';
import user from './modules/user/user-reducer';
import auth from './modules/auth/auth-reducer';

export default combineReducers({
  auth,
  spinner,
  user,
  language,
  routing,
  documentTitle,
  form,
});
