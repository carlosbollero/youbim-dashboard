import React from 'react';

import { useSelector, useDispatch } from '../../../../contexts/ItemsContext';
import CardList from '../../../../components/CardsList';

import styles from './styles.module.scss';

function AvailableItemsList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const action = {
    label: 'Add to Bundle',
    onClick: code => dispatch({ type: 'addToBundle', payload: code }),
    onlyParent: true,
  };
  return (
    <div>
      <CardList actionButtonClassName={styles['add-button']} items={items} headerAction={action} />
    </div>
  );
}

export default AvailableItemsList;
