import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import PATHS from '../../../constants/paths';

import styles from './styles.module.scss';

function Navbar() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, value) => {
    setTabValue(value);
  };
  return (
    <AppBar position="static">
      <Toolbar className={styles.navbar}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab
            className={styles.tab}
            component="a"
            href={PATHS.CREATE_ITEMS}
            label="Create Items"
            value={0}
          />
          <Tab
            className={styles.tab}
            component="a"
            href={PATHS.CREATE_BUNDLE}
            label="Create Bundle"
            value={1}
          />
          <Tab
            className={styles.tab}
            component="a"
            href={PATHS.RELEASED_BUNDLES}
            label="Released Bundles"
            value={2}
          />
        </Tabs>
        <IconButton className={styles.about}>
          <HelpOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
