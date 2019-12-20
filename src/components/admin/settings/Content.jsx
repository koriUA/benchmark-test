import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from './routes';

const Content = ({ parentPath }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Redirect from="/Admin/Settings" to="/Admin/Settings/general" />
    {ROUTES.map(({ path, component }) => (
      <Route key={path} component={component} exact path={`${parentPath}${path}`} />
    ))}
  </Suspense>
);

Content.propTypes = {
  parentPath: PropTypes.string,
};

Content.defaultProps = {
  parentPath: '',
};

export default Content;
