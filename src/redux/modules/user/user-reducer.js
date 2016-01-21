import {
  getUser,
  SET_USER,
  CLEAR_USER,
} from './user-actions';

const userReducer = (state = getUser(), action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.user);
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
