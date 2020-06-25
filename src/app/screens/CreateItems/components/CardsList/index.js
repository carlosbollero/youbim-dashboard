import React from 'react';

import { useSelector, useDispatch } from '../../../../contexts/ItemsContext';
import Card from '../../../../components/Card';
import { buildContent } from './utils';

import styles from './styles.module.scss';

function CardsList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  return items.map(item => {
    const action = { label: 'Delete', call: code => dispatch({ type: 'removeItem', payload: code }) };
    return (
      <Card
        className={styles.card}
        actionButtonClassName={styles['delete-button']}
        contentClassName={styles['sub-content']}
        headerClassName={styles['card-header']}
        key={item.code}
        title={item.code}
        action={action}
        content={buildContent(item)}
      />
    );
  });
}

export default CardsList;
