import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => lighten(0.2, theme.colors.background)};
  box-shadow: 1px 1px 3px #3333;
  border-radius: 4px;
  width: 350px;
  height: 380px;
  margin: 10px;
  padding: 15px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 300px;
`;
