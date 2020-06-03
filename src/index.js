import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './Main';
import Accomodation from './Accomodation';

import Globals from './styles/Global';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './styles/Theme';
import './main.css';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Normalize />
        <Globals />
        <Switch>
          <Route exact path='/accomodation' component={Accomodation} />
          <Route path='/' component={App} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
