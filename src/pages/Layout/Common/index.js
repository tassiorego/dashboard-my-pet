import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '~/components/SideBar';

import { Wrapper, Container } from './styles';

function CommonLayout({ children }) {
  return (
    <>
      <Container>
        <SideBar />
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
}

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonLayout;
