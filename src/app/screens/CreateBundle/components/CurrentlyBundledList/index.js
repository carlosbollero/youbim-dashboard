import React from 'react';
import { Typography, Button } from '@material-ui/core';

import { BundlesContext, useSelector, useDispatch } from '../../../../contexts/BundlesContext';
import withContext from '../../../../hocs/withContext';
import CardList from '../../../../components/CardsList';

import styles from './styles.module.scss';

function CurrentlyBundled() {
  const { items, price } = useSelector(state => state.bundle);
  const dispatch = useDispatch();

  const handleAcceptBundle = () => {
    dispatch({ type: 'saveBundle' });
  };

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
      <CardList actionButtonClassName={styles['delete-button']} items={items} headerAction={action} />
      {items.length > 0 && (
        <>
          <Typography className={styles['bundle-total']} variant="subtitle1">{`$ ${price}`}</Typography>
          <Button className={styles['accept-button']} onClick={handleAcceptBundle}>
            Accept Bundle
          </Button>
        </>
      )}
    </>
  );
}

export default withContext(BundlesContext)(CurrentlyBundled);
