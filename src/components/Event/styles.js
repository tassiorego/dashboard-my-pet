import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 200px;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 1px #3331;
  padding: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    height: 180px;
    border-radius: 5px;
  }
  h3,
  p {
    margin-bottom: 5px;
    color: ${({ theme }) => lighten(0.15, theme.colors.text)};
  }
  button {
    margin-top: 10px;
  }
`;
