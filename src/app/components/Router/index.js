import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from './constants';

function Router({ contentClassName, children }) {
  return (
    <BrowserRouter>
      {children}
      <div className={contentClassName}>
        <Switch>
          {ROUTES.map(({ path, component, ...routeConfig }) => (
            <Route key={path} path={path} component={component} {...routeConfig} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
