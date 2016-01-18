import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import auth from './modules/auth/auth-reducer';

export default combineReducers({
  auth,
  routing,
});
