import styled, { css } from 'styled-components';
import { darken } from 'polished';

const filled = css`
  background: none;

  &:hover {
    background: none;
    opacity: 0.6;
  }
`;

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background: ${({ theme }) =>
      `linear-gradient(37deg, ${theme.colors.primary}, ${darken(
        0.05,
        theme.colors.primary
      )})`};
    color: #fff;
    &:hover {
      background: ${(props) => darken(0.15, props.theme.colors.primary)};
    }
  `,
  danger: css`
    background: ${({ theme }) =>
      `linear-gradient(37deg, ${theme.colors.danger}, ${darken(
        0.1,
        theme.colors.danger
      )})`};
    color: #fff;
    &:hover {
      background: ${(props) => darken(0.15, props.theme.colors.danger)};
    }
  `,
  success: css`
    background: ${({ theme }) =>
      `linear-gradient(37deg, ${theme.colors.success}, ${darken(
        0.1,
        theme.colors.success
      )})`};
    color: #fff;
    &:hover {
      background: ${(props) => darken(0.15, props.theme.colors.success)};
    }
  `,
  gray: css`
    background: #b9bbbe;

    &:hover {
      background: #999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: 0.15s step-start;
  background: #7289ba;
  border: 0;
  font-size: 12px;
  padding: 0 10px;
  font-weight: 700;

  ${({ size }) => sizes[size || 'default']}
  ${({ color }) => colors[color || 'default']}

  ${(props) => props.filled === false && filled}


  svg{
    color: #fff !important;
  }

  `;

export default Button;
