import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Nunito', sans-serif;
    color: black;
  }

  body {
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
