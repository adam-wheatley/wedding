import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  @font-face {
    font-family: 'visually';
    src: url('./fonts/visually.ttf');
  }

  @font-face {
    font-family: 'thinoothin';
    src: url('./fonts/thinoothin.otf');
  }


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
    // background: #F1F2F5;
    // color: #545e6f;
    color: black;
  }

  body {
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
