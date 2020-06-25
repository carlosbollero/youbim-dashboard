import React from 'react';

import { useSelector } from '../../../../contexts/ItemsContext';
import Card from '../../../../components/Card';
import { buildContent } from './utils';

import styles from './styles.module.scss';

function CardsList() {
  const items = useSelector(state => state.items);
  const action = { label: 'Delete' };
  return items.map(item => (
    <Card
      className={styles.card}
      key={item.code}
      title={item.code}
      action={action}
      content={buildContent(item)}
    />
  ));
}

export default CardsList;
