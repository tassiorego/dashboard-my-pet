import { put, call } from 'redux-saga/effects';

import api from '~/services/api';
import CompanyActions from '../ducks/companies';

export function* getCompanies() {
  const result = yield call(api.get, '/companies');

  yield put(CompanyActions.getCompaniesSuccess(result.data.companies));
}
