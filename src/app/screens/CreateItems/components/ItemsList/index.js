import React from 'react';

import { useSelector, useDispatch } from '../../../../contexts/ItemsContext';
import CardList from '../../../../components/CardsList';

import styles from './styles.module.scss';

function ItemsList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const action = { label: 'Delete', onClick: code => dispatch({ type: 'removeItem', payload: code }) };
  return <CardList actionButtonClassName={styles['delete-button']} items={items} headerAction={action} />;
}

export default ItemsList;
