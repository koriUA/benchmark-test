import React from 'react';
import {
  BreadcrumbsTemplate,
  Breadcrumb,
  BreadcrumbItem,
  HeaderNavigation,
  HeaderMenuItem,
} from '@decibel/components';
import { Link } from 'react-router-dom';
import Shell from 'cui-react-shell';

import Routes from './routes';

const Breadcrumbs = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/#">Application 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Application 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Application 3</BreadcrumbItem>
  </Breadcrumb>
);

const navigationItems = () => (
  <HeaderNavigation aria-label="Acoustic Shell">
    <HeaderMenuItem element={Link} to="/404">
      404 Page
    </HeaderMenuItem>
    <HeaderMenuItem element={Link} to="/settings">
      Settings
    </HeaderMenuItem>
    <HeaderMenuItem element={Link} to="/users-path">
      Injected route
    </HeaderMenuItem>
  </HeaderNavigation>
);

function App() {
  return (
    <Shell navigationItems={navigationItems}>
      <BreadcrumbsTemplate breadcrumbs={<Breadcrumbs />}>
        <Routes />
      </BreadcrumbsTemplate>
    </Shell>
  );
}

export default App;
