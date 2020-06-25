import React from 'react';

const withContext = Context => WrappedComponent => {
  return props => (
    <Context.Consumer>{context => <WrappedComponent {...props} context={context} />}</Context.Consumer>
  );
};

export default withContext;
