import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import { ROUTES } from './routes';

const Content = ({ parentPath }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from="/Admin/Settings" to={`${parentPath}${ROUTES[0].path}`} />
      {ROUTES.map(({ path, component }) => (
        <Route key={path} component={component} exact path={`${parentPath}${path}`} />
      ))}
    </Switch>
  </Suspense>
);

Content.propTypes = {
  parentPath: PropTypes.string,
};

Content.defaultProps = {
  parentPath: '',
};

export default Content;
