import React from 'react';
import Lottie from 'lottie-react-web';

import { Form, Input } from '@rocketseat/unform';
import { Content, AnimationContent, InputGroup } from '../styles';
import Button from '~/styles/components/Button';

import password from '~/assets/animations/password.json';

//
export default function Password() {
  return (
    <Content>
      <section>
        <div>
          <h1>Mudar Senha</h1>
        </div>
        <div>
          <Button color="success">SALVAR</Button>
        </div>
      </section>
      <section>
        <AnimationContent>
          <Lottie
            options={{
              animationData: password,
              loop: true,
            }}
          />
        </AnimationContent>
        <Form>
          <InputGroup direction="row">
            <InputGroup>
              <span>Senha atual</span>
              <Input name="name" />
            </InputGroup>
            <InputGroup>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </InputGroup>
          </InputGroup>
          <InputGroup direction="row">
            <InputGroup>
              <span>Nova senha</span>
              <Input disabled name="email" value="tassio@criatech.me" />
            </InputGroup>
            <InputGroup>
              <span>Confirmação sua senha</span>
              <Input name="document" />
            </InputGroup>
          </InputGroup>
        </Form>
      </section>
    </Content>
  );
}
