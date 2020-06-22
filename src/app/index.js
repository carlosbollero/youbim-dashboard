import React, { Fragment } from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Navbar from './components/Navbar';
import Router from './components/Router';

function App() {
  return (
    <Fragment>
      <StylesProvider injectFirst>
        <Navbar />
        <Router />
      </StylesProvider>
    </Fragment>);
}

export default App;
