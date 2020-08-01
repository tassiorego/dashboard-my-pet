import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';
import KEYS from '~/config/keys';

import UserActions from '../ducks/user';

export function* UpdateUser({ data }) {
  try {
    const result = yield call(api.put, '/users', { ...data });
    localStorage.setItem(KEYS.USER_KEY, JSON.stringify(result.data));
    yield put(UserActions.userUpdateSuccess(result.data));
    toastrActions.add({
      type: 'success',
      title: 'Sucesso',
      message: 'Usuário atualizado com sucesso',
    });
    // yield put(push('/'));
  } catch (error) {
    yield put(UserActions.userUpdateFailed());
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao atualizar usuário',
        message: 'Não conseguimos atualizar seu usuário ',
      })
    );
  }
}
