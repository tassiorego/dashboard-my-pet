import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';

import { push } from 'connected-react-router';
import { useSelector, connect, useDispatch } from 'react-redux';

import Actions from '~/store/ducks/auth';

import { Container, Button, Menu, MenuItem } from './styles';

function Profile({ navigate }) {
  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const refMenu = useRef(null);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleNavigate(route) {
    setVisible(false);
    navigate(route);
  }

  function handleSignOut() {
    setVisible(false);
    // eslint-disable-next-line import/no-named-as-default-member
    dispatch(Actions.signOut());
    navigate('/signin');
  }

  const handleClickOutSide = useCallback((e) => {
    if (refMenu.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [handleClickOutSide]);

  return (
    <Container>
      <Button onClick={handleToggleVisible}>
        <div>
          <strong>{user?.name}</strong>
          <span>{user?.email}</span>
        </div>
        <Avatar
          alt={user?.name}
          src={
            user?.avatar?.thumbnail ||
            'https://api.adorable.io/avatars/70/abott@adorable.png'
          }
        />
      </Button>
      <Menu ref={refMenu} visible={visible}>
        <MenuItem fullWidth onClick={() => handleNavigate('/profile')}>
          <FiUser size={20} />
          Editar minha conta
        </MenuItem>
        <MenuItem textColor="danger" fullWidth onClick={handleSignOut}>
          <FiLogOut size={20} />
          Sair do Vale Lounge
        </MenuItem>
      </Menu>
    </Container>
  );
}

Profile.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default connect(null, { navigate: push })(Profile);
