import React from 'react';
import { Grid } from '@material-ui/core';

import { ItemContext } from '../../contexts/ItemsContext';
import withContext from '../../hooks/withContext';
import CreateItemForm from './components/CreateItemForm';
import ItemsList from './components/ItemsList';

function CreateItems() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <CreateItemForm />
      </Grid>
      <Grid item xs={6}>
        <ItemsList />
      </Grid>
    </Grid>
  );
}

export default withContext(ItemContext)(CreateItems);
