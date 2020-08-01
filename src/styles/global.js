import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) =>
      lighten(0.01, props.theme.colors.background)};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;

  }

  body, input, button {
    font-family: 'Nunito', sans-serif !important;
    font-size: 14px;
    color: #333;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
    transition: 0.15s ease;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

  }





  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
