import React from 'react';
import { Grid } from '@material-ui/core';

import { ItemContext } from '../../contexts/ItemsContext';
import withContext from '../../hooks/withContext';
import CreateItemForm from './components/CreateItemForm';
import CardsList from './components/CardsList';

function CreateItems() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <CreateItemForm />
      </Grid>
      <Grid item xs={6}>
        <CardsList />
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
}

export default withContext(ItemContext)(CreateItems);
