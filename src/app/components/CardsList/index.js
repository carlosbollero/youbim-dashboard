import React from 'react';

import Card from '../Card';
import { buildContent } from './utils';

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
        className={cardClassName}
        actionButtonClassName={actionButtonClassName}
        contentClassName={contentClassName}
        headerClassName={headerClassName}
        key={item.code}
        title={item.code}
        action={headerAction}
        content={buildContent(item)}
      />
    );
  });
}

export default CardsList;
