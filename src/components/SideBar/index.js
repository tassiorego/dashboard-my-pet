import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Button } from '@material-ui/core';
import { Hash, Settings, Layout, LogOut } from 'react-feather';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Container, Button } from './styles';

function SideBar({ navigate }) {
  const [route, setRoute] = useState(window.location.pathname);
  function handleNavigate(path) {
    setRoute(path);
    navigate(path);
  }

  function handleActived(path) {
    return route === path || route.includes(`${path}/`) ? 1 : 0;
  }

  return (
    <Container>
      <nav>
        <header>
          <h1>My Pet</h1>
        </header>
        <Button
          actived={handleActived('/')}
          onClick={() => handleNavigate('/')}
        >
          <Layout />
          Dashboard
        </Button>
        <Button
          actived={handleActived('/events')}
          onClick={() => handleNavigate('/events')}
        >
          <Hash />
          Eventos
        </Button>
        <Button
          actived={handleActived('/settings')}
          onClick={() => handleNavigate('/settings')}
        >
          <Settings />
          Configurações
        </Button>
      </nav>
      <footer>
        <Button color="danger">
          <LogOut />
          Sair
        </Button>
        <p>
          Desenvolvido com{' '}
          <span role="img" aria-label="love">
            💚
          </span>{' '}
          por <strong>Tássio Rego</strong>
        </p>
      </footer>
    </Container>
  );
}

SideBar.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default connect(null, { navigate: push })(SideBar);
