import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.sidebar};
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.colors.surface)};
  height: 100%;
  width: 300px;
  padding: 45px 15px 15px 50px;

  header {
    img {
      width: 90%;
    }
    h1 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  footer {
    span {
    }
    p {
      text-align: center;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fonts.smaller};
      display: block;
      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid ${({ theme }) => lighten(0.6, theme.colors.text)};
    }
  }
`;

const colors = {
  default: css`
    color: ${({ theme }) => theme.colors.text};
    background: none;
    &:hover {
      border-radius: 5px;
      background: ${({ theme }) => transparentize(0.95, theme.colors.text)};
      color: ${({ theme }) => theme.colors.primary};
    }
    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin: 0px 15px;
    }
  `,
  actived: css`
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => transparentize(0.92, theme.colors.primary)};

    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin: 0px 15px;
    }
  `,
  danger: css`
    color: ${({ theme }) => lighten(0, theme.colors.danger)};
    background: none;
    &:hover {
      background: ${({ theme }) => transparentize(0.92, theme.colors.danger)};
      color: ${({ theme }) => darken(0.1, theme.colors.danger)};
    }

    svg {
      color: ${({ theme }) => theme.colors.danger};
      margin: 0px 15px 0px 5px;
    }
  `,
  success: css`
    color: ${({ theme }) => lighten(0.3, theme.colors.secondary)};
    background: none;
    &:hover {
      background: ${({ theme }) =>
        transparentize(0.92, theme.colors.secondary)};
      color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    }
  `,
};

export const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  background: none;
  border: none;
  border-radius: 5px;
  padding: 10px ;
  padding-left: ${({ left }) => left || '0px'};
  font-size: ${({ theme }) => theme.fonts.regular};
  font-weight: 700;

  ${({ color, actived }) =>
    colors[(actived && 'actived') || color || 'default']}

  /* &:hover {
    border-radius: 5px;
    background: ${({ theme }) => transparentize(0.92, theme.colors.text)};
    color: ${({ theme }) => darken(0.1, theme.colors.primary)};
  } */
  & + button {
    margin-top: 5px;
  }
`;
