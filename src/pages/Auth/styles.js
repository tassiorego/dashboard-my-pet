import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.sidebar};
  box-shadow: 1px 1px 4px #3335;
  display: flex;
  height: 100%;
  width: 65%;
  justify-content: center;
  align-items: center;
`;

export const SignInForm = styled.form`
  border-radius: 5px;
  padding: 40px;
  width: 55%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    text-align: center;
    margin: 0 0 20px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fonts.regular};
    line-height: 16px;
    font-weight: 500;
    margin-top: 15px;
  }
  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #0003;
    background-color: #e8f0fe;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }
  button {
    margin-top: 20px;
  }

  a {
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
    transition: 0.15s ease;

    &:hover {
      color: ${(props) => darken(0.2, props.theme.colors.primary)};
    }
  }

  p {
    color: ${(props) => darken(0.2, props.theme.colors.text)};
    font-size: 13px;
    margin-top: 20px;

    a {
      color: ${(props) => darken(0.1, props.theme.colors.primary)};
      font-size: 13px;
    }
  }

  img {
    object-fit: contain;
    height: 100px;
  }
`;
