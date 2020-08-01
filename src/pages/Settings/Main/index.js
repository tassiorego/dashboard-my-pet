import React from 'react';
import Lottie from 'lottie-react-web';

import { Form, Input } from '@rocketseat/unform';
import { Content, AnimationContent, InputGroup } from '../styles';
import Button from '~/styles/components/Button';

import account from '~/assets/animations/account.json';

//
export default function Main() {
  return (
    <Content>
      <section>
        <div>
          <h1>Dados Pessoais</h1>
        </div>
        <div>
          <Button color="success">SALVAR</Button>
        </div>
      </section>
      <section>
        <AnimationContent>
          {/* <img
            alt="Tássio Rego"
            src="https://api.adorable.io/avatars/70/abott@adorable.png"
          /> */}
          <Lottie
            options={{
              animationData: account,
              loop: true,
            }}
          />
        </AnimationContent>
        <Form>
          <InputGroup>
            <span>NOME COMPLETO</span>
            <Input name="name" />
          </InputGroup>
          <InputGroup>
            <span>E-MAIL</span>
            <Input disabled name="email" value="tassio@criatech.me" />
          </InputGroup>
          <InputGroup direction="row">
            <InputGroup>
              <span>CPF</span>
              <Input name="document" />
            </InputGroup>
            <InputGroup>
              <span>Telefone</span>
              <Input name="phone" />
            </InputGroup>
          </InputGroup>
        </Form>
      </section>
    </Content>
  );
}
