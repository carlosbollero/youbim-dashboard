import React from 'react';
import cn from 'classnames';
import { string, node, shape, arrayOf } from 'prop-types';
import { Card as MCard, CardHeader, CardContent, Button, Typography } from '@material-ui/core';

import styles from './styles.module.scss';

function BaseCard({ className, actionButtonClassName, headerClassName, title, action, text, children }) {
  const actionButton = action && (
    <Button
      className={cn(styles['action-button'], actionButtonClassName)}
      onClick={() => action.onClick(title)}
    >
      {action.label}
    </Button>
  );
  return (
    <MCard className={className}>
      <CardHeader className={headerClassName} title={title} action={actionButton} />
      <CardContent className={styles['card-content']}>
        {text.map(p => (
          <Typography key={p}>{p}</Typography>
        ))}
        {children}
      </CardContent>
    </MCard>
  );
}

BaseCard.propTypes = {
  className: string,
  actionButtonClassName: string,
  headerClassName: string,
  title: string.isRequired,
  action: shape({ label: string }),
  text: arrayOf(string).isRequired,
  children: node,
};

BaseCard.defaultProps = {
  className: '',
  actionButtonClassName: '',
  headerClassName: '',
  action: null,
  children: null,
};

function Card({
  className,
  actionButtonClassName,
  contentClassName,
  headerClassName,
  title,
  action,
  content,
}) {
  const { text, subContent } = content;
  return (
    <BaseCard
      className={cn(styles.card, className)}
      actionButtonClassName={actionButtonClassName}
      headerClassName={cn(styles['card-header'], headerClassName)}
      title={title}
      action={action}
      text={text}
    >
      {subContent.length > 0 && (
        <>
          <Typography className={styles['card-subtitle']} variant="subtitle1">
            Sub-Items
          </Typography>
          {subContent.map(({ title: sTitle, text: sText }) => (
            <BaseCard
              className={cn(styles['sub-content'], contentClassName)}
              actionButtonClassName={actionButtonClassName}
              headerClassName={cn(styles['card-header'], headerClassName)}
              key={sTitle}
              title={sTitle}
              action={!action.onlyParent && action}
              text={sText}
            />
          ))}
        </>
      )}
    </BaseCard>
  );
}

Card.propTypes = {
  className: string,
  actionButtonClassName: string,
  contentClassName: string,
  headerClassName: string,
  title: string.isRequired,
  action: shape({ label: string }),
  content: shape({ text: arrayOf(string).isRequired, subContent: arrayOf(shape({})) }).isRequired,
};

Card.defaultProps = {
  className: '',
  actionButtonClassName: '',
  contentClassName: '',
  headerClassName: '',
  action: null,
};

export default Card;
