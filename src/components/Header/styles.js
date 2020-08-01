import styled from 'styled-components';

export const AppBar = styled.header`
  background: ${({ theme }) =>
    `linear-gradient(37deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  z-index: 5555;

  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
