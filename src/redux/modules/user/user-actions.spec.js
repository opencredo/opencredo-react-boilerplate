import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updateUser,
} from './user-actions';

describe('updateUserRequest', () => {
  it(`returns an action with type ${UPDATE_USER_REQUEST}`, () => {
    const action = updateUserRequest();
    expect(action.type).to.be.equal(UPDATE_USER_REQUEST);
  });

  it('does not contain user state', () => {
    const action = updateUserRequest();
    expect(action.user).to.be.eq(undefined);
  });
});

describe('updateUserSuccess', () => {
  it(`returns an action with type ${UPDATE_USER_SUCCESS}`, () => {
    const action = updateUserSuccess();
    expect(action.type).to.be.equal(UPDATE_USER_SUCCESS);
  });

  it('contains the updated user', () => {
    const user = { name: 'Test' };
    const action = updateUserSuccess(user);
    expect(action.user).to.be.equal(user);
  });
});

describe('updateUserFailure', () => {
  it(`returns an action with type ${UPDATE_USER_FAILURE}`, () => {
    const action = updateUserFailure();
    expect(action.type).to.be.equal(UPDATE_USER_FAILURE);
  });

  it('does not contain user state', () => {
    const action = updateUserFailure();
    expect(action.user).to.be.eq(undefined);
  });
});

describe('updateUser', () => {
  it(`is an asynchronous action`, () => {
    const action = updateUser();
    expect(action).to.be.a('function');
  });
});
