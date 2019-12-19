import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { ROUTES } from './routes';

const Content = () => {
  const match = useRouteMatch();
  return (
    <>
      {ROUTES.map(({ path, component }) => (
        <Route key={path} component={component} exact path={`${match.path}${path}`} />
      ))}
    </>
  );
};

export default Content;
