import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core';
import ToolBar from '@material-ui/core/ToolBar';
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
      <ToolBar className={styles.navbar}>
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
      </ToolBar>
    </AppBar>
  );
}

export default Navbar;
