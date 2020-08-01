import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import AuthActions from '~/store/ducks/auth';
import { Container, SignInForm } from '../styles';

import Button from '~/styles/components/Button';

function SignIn({ signInRequest }) {
  const loading = useSelector((state) => state.auth.loading);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = state;

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signInRequest(email, password);
  }
  return (
    <Container>
      <SignInForm onSubmit={handleSubmit}>
        {/* <img src={logo} alt="Vale Lounge" /> */}
        <h1>My Pet</h1>
        <span>E-MAIL</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <span>SENHA</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <Button size="big" type="submit" onClick={handleSubmit}>
          {loading ? <CircularProgress size={20} /> : 'ENTRAR'}
        </Button>
        <Link to="/signup">Novo por aqui? Crie sua conta</Link>
        <p>
          Entenda um pouco sobre nós vendo nossos{' '}
          <Link to="/signin">Termos de Serviço</Link>,{' '}
          <Link to="/signin">Política de Privacidade</Link> e{' '}
          <Link to="/signin">Configurações de Notificação</Link>.
        </p>
      </SignInForm>
    </Container>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatch)(SignIn);
