import React from 'react';
import { Route } from 'react-router-dom';
import { EmptyStates } from '@decibel/components';

import Usage from 'components/admin/usage/Usage';
import UserManagement from 'components/admin/user-management/UserManagement';

export default () => (
  <>
    <Route component={Usage} exact path="/" />
    <Route component={EmptyStates} exact path="/Admin/" />
    <Route component={Usage} exact path="/admin/usage" />
    <Route component={UserManagement} exact path="/Admin/UserManagement" />
  </>
);
