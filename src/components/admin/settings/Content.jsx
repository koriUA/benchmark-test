import React, { Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { ROUTES } from './routes';

const Content = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {ROUTES.map(({ path, component }) => (
        <Route key={path} component={component} exact path={`${match.path}${path}`} />
      ))}
    </Suspense>
  );
};

export default Content;
