import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: ${({ theme }) => lighten(0.2, theme.colors.background)};
  border-radius: 5px;
  box-shadow: 1px 1px 4px #3333;
  padding: 10px 0px;
`;

const colors = {
  default: css`
    background: none;
    color: ${({ theme }) => lighten(0.2, theme.colors.text)};

    svg {
      color: ${({ theme }) => lighten(0.2, theme.colors.text)};
    }
  `,
  actived: css`
    background: ${({ theme }) => lighten(0.6, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
};

export const ListItem = styled.button`
  display: flex;
  border: none;
  padding: 15px 20px;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.3s;

  ${({ actived }) => colors[(actived && 'actived') || 'default']}

  &:hover {
    background: ${({ theme }) => lighten(0.6, theme.colors.primary)};
    color: ${({ theme }) => lighten(0, theme.colors.primary)};

    svg {
      color: ${({ theme }) => lighten(0, theme.colors.primary)};
    }
  }
  &:active {
    background: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  }

  svg {
    margin-right: 10px;
  }

  & + button {
    border-top: 1px solid
      ${({ theme }) => transparentize(0.9, theme.colors.text)};
  }
`;
