import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ReduxToastr from 'react-redux-toastr';

import store from '~/store';
import Routes from '~/routes';
import light from '~/styles/themes/light';

import GlobalStyles from '~/styles/global';

export default function src() {
  return (
    <ThemeProvider theme={light}>
      <Provider store={store}>
        <>
          <Routes />
          <ReduxToastr
            timeOut={4000}
            progressBar
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            closeOnToastrClick
          />
          <GlobalStyles />
        </>
      </Provider>
    </ThemeProvider>
  );
}
