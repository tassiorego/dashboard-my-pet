import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { FiCreditCard, FiShield, FiBell, FiLock } from 'react-icons/fi';

import Main from './Main';
import TicketTypes from './TicketTypes';
import Password from './Password';

import { Container } from './styles';

import { List, ListItem } from '~/styles/components/List';

function Settings({ navigate }) {
  const [route, setRoute] = useState(window.location.pathname);

  function handleNavigate(path) {
    setRoute(path);
    navigate(path);
  }
  return (
    <Container>
      <div>
        <List>
          <ListItem
            onClick={() => handleNavigate('/settings')}
            actived={route === '/settings'}
          >
            <FiShield size={20} />
            Minha Conta
          </ListItem>
          <ListItem
            onClick={() => handleNavigate('/settings/password')}
            actived={route === '/settings/password'}
          >
            <FiLock size={20} />
            Minha Senha
          </ListItem>
          <ListItem>
            <FiCreditCard size={20} />
            Pagamento
          </ListItem>
          <ListItem>
            <FiBell size={20} />
            Notificações
          </ListItem>
        </List>
      </div>
      <Switch>
        <Route path="/settings/" exact component={Main} />
        <Route path="/settings/tycket-types" component={TicketTypes} />
        <Route path="/settings/password" component={Password} />
      </Switch>
    </Container>
  );
}

Settings.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default connect(null, { navigate: push })(Settings);
