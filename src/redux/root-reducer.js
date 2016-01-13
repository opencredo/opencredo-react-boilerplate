import {combineReducers} from 'redux';
import {routeReducer as router} from 'redux-simple-router';
import auth from 'redux/modules/auth/auth-reducer';

export default combineReducers({
  auth,
  router,
});
