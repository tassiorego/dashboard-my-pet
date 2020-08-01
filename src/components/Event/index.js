import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '~/assets/images/notfound.png';

import { Container } from './styles';
import Button from '~/styles/components/Button';

function Event({ name, address, avatar }) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{address?.place || 'Não há local definido'}</p>
      <img src={avatar?.url || defaultImage} alt="Logo" />
      <Button size="small">Editar</Button>
      <Button color="success" size="small">
        Publicar
      </Button>
    </Container>
  );
}

Event.defaultProps = {
  name: '',
  address: null,
  avatar: null,
};

Event.propTypes = {
  name: PropTypes.string,
  address: PropTypes.shape({
    place: PropTypes.string,
  }),
  avatar: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default Event;
