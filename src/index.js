import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './App';
import Accomodation from './Accomodation';
import Venue from './Venue';
import Hair from './Hair';

import Globals from './styles/Global';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './styles/Theme';
import './styles/main.css';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Normalize />
        <Globals />
        <Switch>
          <Route exact path='/venue' component={Venue} />
          <Route exact path='/accomodation' component={Accomodation} />
          <Route exact path='/hairandmakeup' component={Hair} />
          <Route path='/' component={App} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
