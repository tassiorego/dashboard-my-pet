import React from 'react';

import Notifications from '~/components/Notifications';
import Profile from '~/components/Profile';

import { AppBar, Options } from './styles';

function Header() {
  return (
    <AppBar>
      <h1>Vale Lounge</h1>
      <Options>
        <Notifications />
        <Profile />
      </Options>
    </AppBar>
  );
}

export default Header;
