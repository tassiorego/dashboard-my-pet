import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Plus } from 'react-feather';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Event from '~/components/Event';

import api from '~/services/api';

import { Container } from './styles';

function Events({ navigate }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const result = await api.get('/companies/events');

      setData(result.data);
    }
    getEvents();
  }, []);

  return (
    <Container>
      <header>
        <h1>Eventos</h1>
        <IconButton onClick={() => navigate('/events/new')}>
          <Plus />
        </IconButton>
      </header>
      <section>
        {data?.map((item) => (
          <Event
            key={String(item.id)}
            name={item.name}
            address={item.address}
            avatar={item.avatar}
          />
        ))}
      </section>
    </Container>
  );
}

Events.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default connect(null, { navigate: push })(Events);
