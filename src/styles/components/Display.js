import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex || 1};
  padding: 10px;
`;
