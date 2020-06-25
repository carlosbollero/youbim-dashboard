import React, { useReducer } from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import { ItemContext } from './contexts/ItemsContext';
import { reducer, INITIAL_STATE } from './contexts/ItemsContext/reducer';
import Navbar from './components/Navbar';
import Router from './components/Router';

import styles from './styles.module.scss';

function App() {
  const [itemsState, itemsDispatch] = useReducer(reducer, INITIAL_STATE);
  const value = { state: itemsState, dispatch: itemsDispatch };
  return (
    <ItemContext.Provider value={value}>
      <div className={styles.main}>
        <StylesProvider injectFirst>
          <Router contentClassName={styles.content}>
            <Navbar />
          </Router>
        </StylesProvider>
      </div>
    </ItemContext.Provider>
  );
}

export default App;
