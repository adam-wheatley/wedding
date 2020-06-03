import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './Main';
import Globals from './styles/Global';
import { theme } from './styles/Theme';
import './main.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Normalize />
      <Globals />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
