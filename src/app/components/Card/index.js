import React from 'react';
import { string, node, shape, arrayOf } from 'prop-types';
import { Card as MCard, CardHeader, CardContent, Button, Typography } from '@material-ui/core';

function BaseCard({ className, actionButtonClassName, headerClassName, title, action, text, children }) {
  const actionButton = action && (
    <Button className={actionButtonClassName} onClick={() => action.call(title)}>
      {action.label}
    </Button>
  );
  return (
    <MCard className={className}>
      <CardHeader className={headerClassName} title={title} action={actionButton} />
      <CardContent>
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
      className={className}
      actionButtonClassName={actionButtonClassName}
      contentClassName={contentClassName}
      title={title}
      action={action}
      text={text}
    >
      {subContent &&
        subContent.map(({ title: sTitle, text: sText }) => (
          <BaseCard
            className={contentClassName}
            actionButtonClassName={actionButtonClassName}
            headerClassName={headerClassName}
            key={sTitle}
            title={sTitle}
            action={action}
            text={sText}
          />
        ))}
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
