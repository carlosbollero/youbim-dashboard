import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

import PATHS from '../../../constants/paths';

import styles from './styles.module.scss';

function Navbar() {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(location.pathname);
  const handleTabChange = (event, value) => {
    setCurrentTab(value);
  };
  return (
    <AppBar position="absolute">
      <Toolbar className={styles.navbar}>
        <Tabs onChange={handleTabChange} value={currentTab}>
          <Tab
            className={styles.tab}
            component={Link}
            to={PATHS.CREATE_ITEMS}
            label="Create Items"
            value={PATHS.CREATE_ITEMS}
          />
          <Tab
            className={styles.tab}
            component={Link}
            to={PATHS.CREATE_BUNDLE}
            label="Create Bundle"
            value={PATHS.CREATE_BUNDLE}
          />
          <Tab
            className={styles.tab}
            component={Link}
            to={PATHS.RELEASED_BUNDLES}
            label="Released Bundles"
            value={PATHS.RELEASED_BUNDLES}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
