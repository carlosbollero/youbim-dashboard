import React from 'react';
import { Grid } from '@material-ui/core';

import { ItemContext } from '../../contexts/ItemsContext';
import withContext from '../../hooks/withContext';
import AvailableItemsList from './components/AvailableItemsList';
import CurrentlyBundledList from './components/CurrentlyBundledList';

function CreateBundle() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={7}>
        <AvailableItemsList />
      </Grid>
      <Grid item xs={5}>
        <CurrentlyBundledList />
      </Grid>
    </Grid>
  );
}

export default withContext(ItemContext)(CreateBundle);
