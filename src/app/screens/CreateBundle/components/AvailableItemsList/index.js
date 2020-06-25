import React from 'react';
import { Typography } from '@material-ui/core';

import { ItemsContext, useSelector } from '../../../../contexts/ItemsContext';
import { BundlesContext, useDispatch } from '../../../../contexts/BundlesContext';
import { compose, withContext } from '../../../../hocs';
import CardList from '../../../../components/CardsList';

import styles from './styles.module.scss';

function AvailableItemsList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const action = {
    label: 'Add to Bundle',
    onClick: code => {
      const item = items.find(i => i.code === code);
      dispatch({ type: 'addToBundle', payload: item });
    },
    onlyParent: true,
  };
  return (
    <>
      <Typography className={styles.title} variant="h5">
        Available Items
      </Typography>
      <CardList actionButtonClassName={styles['add-button']} items={items} headerAction={action} />
    </>
  );
}

const enhanced = compose(withContext(ItemsContext), withContext(BundlesContext));

export default enhanced(AvailableItemsList);
