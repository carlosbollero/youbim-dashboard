import React from 'react';
import cn from 'classnames';

import Card from '../Card';
import { buildContent } from './utils';

import styles from './styles.module.scss';

function CardsList({
  cardClassName,
  actionButtonClassName,
  contentClassName,
  headerClassName,
  items,
  headerAction,
}) {
  return items.map(item => {
    return (
      <Card
        className={cn(styles.card, cardClassName)}
        actionButtonClassName={cn(styles['action-button'], actionButtonClassName)}
        contentClassName={cn(styles['sub-content'], contentClassName)}
        headerClassName={cn(styles['card-header'], headerClassName)}
        key={item.code}
        title={item.code}
        action={headerAction}
        content={buildContent(item)}
      />
    );
  });
}

export default CardsList;
