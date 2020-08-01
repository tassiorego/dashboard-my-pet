import React from 'react';
import Button from '~/styles/components/Button';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <form>
        <header>
          <img
            alt="Teste"
            src="https://api.adorable.io/avatars/70/abott@adorable.png"
          />
          <Button size="small" type="submit">
            Alterar imagem
          </Button>
        </header>
        <span>Nome Completo</span>
        <input type="email" name="email" />
        <span>E-mail</span>
        <input type="email" name="email" />
        <Button size="big" type="submit">
          ENTRAR
        </Button>
      </form>
    </Container>
  );
}
