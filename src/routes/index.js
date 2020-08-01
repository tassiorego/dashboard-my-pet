import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Special Routes
import PrivateRoute from './private';
import GuestRoute from './guest';

// Pages
import Main from '~/pages/Main';
import Events from '~/pages/Events';
import EditEvent from '~/pages/Events/Edit';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Settings';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute path="/signin" component={SignIn} />
      <GuestRoute path="/signup" component={SignUp} />
      <PrivateRoute path="/" exact component={Main} />
      <PrivateRoute path="/events" exact component={Events} />
      <PrivateRoute path="/events/:id" component={EditEvent} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/settings" component={Setting} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
