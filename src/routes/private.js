/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import CommonLayout from '~/pages/Layout/Common';

import store from '~/store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return store.getState().auth.signedIn ? (
        <CommonLayout>
          <Component {...props} />
        </CommonLayout>
      ) : (
        <Redirect
          // eslint-disable-next-line react/prop-types
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default PrivateRoute;
