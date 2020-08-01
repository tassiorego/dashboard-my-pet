import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

export default function EventsEdit() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
