/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/Layout/Auth';

import store from '~/store';

// eslint-disable-next-line react/prop-types
const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return !store.getState().auth.signedIn ? (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      ) : (
        <Redirect
          // eslint-disable-next-line react/prop-types
          to={{ pathname: '/', state: { from: props.location } }}
        />
      );
    }}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default GuestRoute;
