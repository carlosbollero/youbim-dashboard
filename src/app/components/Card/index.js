import React from 'react';
import { string, node, shape, arrayOf } from 'prop-types';
import { Card as MCard, CardHeader, CardContent, Button, Typography } from '@material-ui/core';

function BaseCard({ className, title, action, text, children }) {
  const actionButton = action && <Button onClick={() => console.log('Click')}>{action.label}</Button>;
  return (
    <MCard className={className}>
      <CardHeader title={title} action={actionButton} />
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
  title: string.isRequired,
  action: shape({ label: string }),
  text: arrayOf(string).isRequired,
  children: node,
};

BaseCard.defaultProps = {
  className: '',
  action: null,
  children: null,
};

function Card({ className, title, action, content }) {
  const { text, subContent } = content;
  return (
    <BaseCard className={className} title={title} action={action} text={text}>
      {subContent &&
        subContent.map(({ title: sTitle, text: sText }) => (
          <BaseCard key={sTitle} title={sTitle} text={sText} />
        ))}
    </BaseCard>
  );
}

Card.propTypes = {
  className: string,
  title: string.isRequired,
  action: shape({ label: string }),
  content: shape({ text: arrayOf(string).isRequired, subContent: arrayOf(shape({})) }).isRequired,
};

Card.defaultProps = {
  className: '',
  action: null,
};

export default Card;
