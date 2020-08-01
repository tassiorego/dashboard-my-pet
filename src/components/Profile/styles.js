import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { Button as ButtonBase } from '@material-ui/core';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const Button = styled(ButtonBase)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 2px 5px 2px 5px;

  span {
    text-transform: none;
    color: ${({ theme }) => lighten(1, theme.colors.text)};
    line-height: 18px;
  }

  img {
    border: 2px solid ${({ theme }) => darken(0.1, theme.colors.success)};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  div {
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Menu = styled.div`
  position: absolute;
  background: ${({ theme }) => transparentize(0.1, theme.colors.notifications)};
  width: 260px;
  right: 10px;
  top: calc(100% + 30px);
  border-radius: 5px;
  padding: 15px 0px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: visibility 0s, opacity 0.5s linear;
  box-shadow: 1px 1px 3px #2225;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid
      ${({ theme }) => transparentize(0.1, theme.colors.notifications)};
  }
`;

const colors = {
  default: css`
    color: #fff;
    svg {
      color: #fff;
    }

    &:hover {
      background: ${transparentize(0.9, '#fff')};
    }
  `,
  danger: css`
    color: ${(props) => darken(0, props.theme.colors.danger)};

    svg {
      color: ${(props) => darken(0, props.theme.colors.danger)};
    }

    &:hover {
      background: ${(props) => transparentize(0.9, props.theme.colors.danger)};
    }
  `,
};

export const MenuItem = styled.button`
  background: none;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: none;
  padding: 10px 15px;
  border-radius: 0px;
  text-transform: none;
  font-weight: 500px;
  font-size: 15px;

  ${({ textColor }) => colors[textColor || 'default']}

  svg {
    margin-right: 10px;
  }

  & + button {
    border-top: 1px solid #fff1;
  }
`;
