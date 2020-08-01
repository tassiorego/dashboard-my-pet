import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 20px;
  overflow: scroll;
  footer {
    position: fixed;
    margin: 10px auto 0px auto;
    /* clear: both; */
    bottom: 0px;
  }
`;

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: row;
  flex-basis: 1;
  height: 100%;
  width: 100%;
  position: fixed;
`;
