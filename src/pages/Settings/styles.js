import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 20px;
  flex-direction: column;
  background: ${({ theme }) => lighten(0.2, theme.colors.background)};
  border-radius: 5px;
  box-shadow: 1px 1px 4px #3333;
  padding: 20px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;

    h1 {
      font-weight: 300;
      font-size: ${({ theme }) => theme.fonts.big};
      color: ${({ theme }) => lighten(0.1, theme.colors.text)};
    }
    & + section {
      border-top: 1px solid
        ${({ theme }) => transparentize(0.9, theme.colors.text)};
    }
  }
  figure {
    padding: 20px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  form {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* grid-template-columns: 2fr 2fr; */
    grid-gap: 20px;

    div {
    }

    input {
      height: 40px;
      width: 100%;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #0003;
      background-color: #e8f0fe;
      transition: border 0.15s ease;
      font-size: 16px;

      &:focus {
        border-color: #7289da;
      }
    }
  }
`;

export const ContentTable = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: ${({ theme }) => lighten(0.01, theme.colors.background)};
  }
  th {
    background: ${({ theme }) => lighten(0, theme.colors.primary)};
    color: white;
    font-weight: bold;
  }
  td,
  th {
    padding: 10px;
    border: none;
    text-align: left;
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
  padding: 20px;
  text-align: center;
`;

const directions = {
  default: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  row: css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: calc(50% - 10px);
    }
  `,
};

export const InputGroup = styled.div`
  ${({ direction }) => directions[direction || 'default']};
  span {
    display: block;
    line-height: 14px;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fonts.regular};
    font-weight: 600;
    color: ${({ theme }) => lighten(0.1, theme.colors.text)};
    margin-bottom: 8px;
    margin-top: 15px;
  }
`;
