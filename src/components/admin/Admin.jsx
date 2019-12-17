import React from 'react';
import { EmptyStates } from '@decibel/components';
import { Route } from 'react-router-dom';

import Usage from './usage/Usage';
import UserManagement from './user-management/UserManagement';

const Admin = () => {
  return (
    <>
      <Route component={EmptyStates} exact path="/Admin/" />
      <Route component={Usage} exact path="/admin/usage" />
      <Route component={UserManagement} exact path="/Admin/UserManagement" />
    </>
  );
};

export default Admin;
