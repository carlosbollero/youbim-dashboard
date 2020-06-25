import React from 'react';
import { Typography, Button } from '@material-ui/core';

import { BundlesContext, useSelector, useDispatch } from '../../../../contexts/BundlesContext';
import withContext from '../../../../hocs/withContext';
import CardList from '../../../../components/CardsList';
import getBundleTotal from './utils';

import styles from './styles.module.scss';

function CurrentlyBundled() {
  const bundle = useSelector(state => state.bundle);
  const dispatch = useDispatch();
  const action = {
    label: 'Delete',
    onClick: code => dispatch({ type: 'removeFromBundle', payload: code }),
    onlyParent: true,
  };
  const bundleTotal = getBundleTotal(bundle);
  return (
    <>
      <Typography className={styles.title} variant="h5">
        Currently Bundled
      </Typography>
      <CardList actionButtonClassName={styles['delete-button']} items={bundle} headerAction={action} />
      {bundle.length > 0 && (
        <>
          <Typography className={styles['bundle-total']} variant="subtitle1">{`$ ${bundleTotal}`}</Typography>
          <Button className={styles['accept-button']}>Accept Bundle</Button>
        </>
      )}
    </>
  );
}

export default withContext(BundlesContext)(CurrentlyBundled);
