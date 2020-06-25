import React, { useReducer } from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import { ItemsContext } from './contexts/ItemsContext';
import { BundlesContext } from './contexts/BundlesContext';

import {
  reducer as itemsReducer,
  INITIAL_STATE as ITEMS_INITIAL_STATE,
} from './contexts/ItemsContext/reducer';
import {
  reducer as bundlesReducer,
  INITIAL_STATE as BUNDLES_INITIAL_STATE,
} from './contexts/BundlesContext/reducer';

import Navbar from './components/Navbar';
import Router from './components/Router';

import styles from './styles.module.scss';

function App() {
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, ITEMS_INITIAL_STATE);
  const [bundlesState, bundlesDispatch] = useReducer(bundlesReducer, BUNDLES_INITIAL_STATE);
  return (
    <ItemsContext.Provider value={{ state: itemsState, dispatch: itemsDispatch }}>
      <BundlesContext.Provider value={{ state: bundlesState, dispatch: bundlesDispatch }}>
        <div className={styles.main}>
          <StylesProvider injectFirst>
            <Router contentClassName={styles.content}>
              <Navbar />
            </Router>
          </StylesProvider>
        </div>
      </BundlesContext.Provider>
    </ItemsContext.Provider>
  );
}

export default App;
