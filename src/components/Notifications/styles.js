import styled, { css } from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';
import { transparentize, lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${({ hasUnread }) =>
    hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0px;
        top: 0;

        width: 8px;
        height: 8px;
        background: ${({ theme }) => theme.colors.warning};
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  background: ${({ theme }) => transparentize(0.1, theme.colors.notifications)};
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 20px);
  border-radius: 5px;
  padding: 15px 5px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: visibility 0s, opacity 0.5s linear;

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

export const Scroll = styled(PerfectScroll)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #fff1;
  }
  color: #fff;
  p {
    font-size: ${({ theme }) => theme.fonts.small};
    line-height: 16px;
    margin: 0 8px;
  }

  time {
    font-size: ${({ theme }) => theme.fonts.smaller};
    opacity: 0.6;
    margin: 0 10px;
  }

  button {
    font-size: ${({ theme }) => theme.fonts.smaller};
    border: 0;
    background: none;
    color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    padding: 0 5px;
    margin: 0 5px;
    ${({ unread }) =>
      unread &&
      css`
        &::after {
          content: '';
          margin-left: 5px;
          display: inline-block;
          width: 8px;
          height: 8px;
          background: ${({ theme }) => theme.colors.warning};
          border-radius: 50%;
        }
      `}
  }
`;
