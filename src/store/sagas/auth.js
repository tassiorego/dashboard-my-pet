import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';
import KEYS from '~/config/keys';

import AuthActions from '../ducks/auth';
import UserActions from '../ducks/user';

export function* SignIn({ email, password }) {
  try {
    const result = yield call(api.post, '/login-web', { email, password });
    localStorage.setItem(KEYS.TOKEN_KEY, result.data.token);
    localStorage.setItem(KEYS.USER_KEY, JSON.stringify(result.data.user));
    yield put(AuthActions.signInSuccess(result.data.token));
    yield put(UserActions.userUpdateSuccess(result.data.user));
    yield put(push('/'));
  } catch (error) {
    yield put(AuthActions.signInFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu email ou senha',
      })
    );
  }
}
