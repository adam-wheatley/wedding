import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TomatoSoup';
    src: url('./fonts/TomatoSoup-Regular.otf');
  }

  @font-face {
    font-family: 'Architectural';
    src: url(../fonts/Architectural.ttf);
  }


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
