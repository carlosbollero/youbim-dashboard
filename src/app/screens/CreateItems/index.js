import React from 'react';
import { Grid } from '@material-ui/core';

import CreateItemForm from './components/CreateItemForm';

function CreateItems() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <CreateItemForm />
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
}

export default CreateItems;
