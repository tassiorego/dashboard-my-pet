import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as profile } from './user';
import { reducer as companies } from './companies';

export default (history) => {
  return combineReducers({
    auth,
    profile,
    companies,
    toastr,
    router: connectRouter(history),
  });
};
