import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import KEYS from '~/config/keys';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signInFailed: [],
  signOut: [],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem(KEYS.TOKEN_KEY),
  token: localStorage.getItem(KEYS.TOKEN_KEY),
  loading: false,
});

/* Reducers */

export const request = (state) => {
  return state.merge({ loading: true });
};

export const success = (state, { token }) => {
  return state.merge({ signedIn: true, loading: false, token });
};

export const failed = (state) => {
  return state.merge({ loading: false });
};

export const signOut = (state) => {
  localStorage.removeItem(KEYS.TOKEN_KEY);
  return state.merge({
    signedIn: false,
    token: null,
  });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_IN_FAILED]: failed,
  [Types.SIGN_OUT]: signOut,
});
