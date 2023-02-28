import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    outline: 0;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  html, body, div#__next {
    height: 100%;
  }
  body {
    min-height: 100%;
  }
`;
