import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Navbar from './components/Navbar';
import Router from './components/Router';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <StylesProvider injectFirst>
        <Navbar />
        <div className={styles.container}>
          <Router />
        </div>
      </StylesProvider>
    </div>
  );
}

export default App;
