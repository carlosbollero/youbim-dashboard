import React from 'react';
import { Typography } from '@material-ui/core';

import { BundlesContext, useSelector, useDispatch } from '../../../../contexts/BundlesContext';
import withContext from '../../../../hocs/withContext';
import CardList from '../../../../components/CardsList';

import styles from './styles.module.scss';

function CurrentlyBundled() {
  const bundle = useSelector(state => state.bundle);
  const dispatch = useDispatch();
  const action = {
    label: 'Delete',
    onClick: code => dispatch({ type: 'removeFromBundle', payload: code }),
    onlyParent: true,
  };
  return (
    <>
      <Typography className={styles.title} variant="h5">
        Currently Bundled
      </Typography>
      <CardList actionButtonClassName={styles['delete-button']} items={bundle} headerAction={action} />
    </>
  );
}

export default withContext(BundlesContext)(CurrentlyBundled);
