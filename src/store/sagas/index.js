import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { UserTypes } from '../ducks/user';
import { CompaniesTypes } from '../ducks/companies';
import { SignIn } from './auth';
import { UpdateUser } from './user';
import { getCompanies } from './companies';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, SignIn),
    takeLatest(UserTypes.USER_UPDATE_REQUEST, UpdateUser),
    takeLatest(CompaniesTypes.GET_COMPANIES_REQUEST, getCompanies),
  ]);
}
