import React, { useState } from 'react';
import { Typography, Card, Button } from '@material-ui/core';

import CardList from '../../components/CardsList';
import localStorageService from '../../../services/localStorageService';

import styles from './styles.module.scss';

function ReleasedBundles() {
  const [bundles, setBundles] = useState(() => {
    const values = localStorageService.getValue('bundles');
    if (values) return values;
    return [];
  });

  const handleDeleteBundle = idx => {
    const newBundles = [...bundles];
    newBundles.splice(idx, 1);
    setBundles(newBundles);
    localStorageService.setValue('bundles', newBundles);
  };

  return (
    <>
      <Typography variant="h5">Released Bundles</Typography>
      {bundles.length > 0 &&
        bundles.map((bundle, idx) => (
          <Card className={styles['bundle-container']}>
            <div className={styles.header}>
              <Typography variant="h5">{`Bundle - ${idx + 1}`}</Typography>
              <Button className={styles['delete-button']} onClick={handleDeleteBundle}>
                Delete
              </Button>
            </div>
            <CardList key={bundle.price} items={bundle.items} />
          </Card>
        ))}
    </>
  );
}

export default ReleasedBundles;
