import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import KEYS from '~/config/keys';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  userUpdateRequest: ['data'],
  userUpdateSuccess: ['user'],
  userUpdateFailed: [],
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  user: JSON.parse(localStorage.getItem(KEYS.USER_KEY)),
  loading: false,
});

/* Reducers */

export const request = (state) => {
  return state.merge({ loading: true });
};

export const success = (state, { user }) => {
  return state.merge({ loading: false, user });
};

export const failed = (state) => {
  return state.merge({ loading: false });
};
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_UPDATE_REQUEST]: request,
  [Types.USER_UPDATE_SUCCESS]: success,
  [Types.USER_UPDATE_FAILED]: failed,
});
