/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '~/store/ducks/auth';
import { Container, SignInForm } from '../styles';

import Button from '~/styles/components/Button';

function SignUp({ signInRequest }) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = state;

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
        <h1>My Pet</h1>
        <span>NOME</span>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
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
          CRIAR CONTA
        </Button>
        <Link to="/signin">Já tenho conta</Link>
        <p>
          Criar uma conta significa que você concorda com nossos{' '}
          <Link to="/signin">Termos de Serviço</Link>,{' '}
          <Link to="/signin">Política de Privacidade</Link> e nossas{' '}
          <Link to="/signin">Configurações de Notificação</Link>.
        </p>
      </SignInForm>
    </Container>
  );
}

SignUp.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatch)(SignUp);
