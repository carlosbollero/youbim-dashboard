import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(({ path, component }) => <Route key={path} path={path} component={component} />)}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;