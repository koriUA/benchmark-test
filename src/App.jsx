import React from 'react';
import { BreadcrumbsTemplate, Breadcrumb } from '@decibel/components';
import Shell from 'cui-react-shell';
import { Provider } from 'react-redux';

import Routes from 'routes';
import { store } from 'store/config';

// Put breadcrumbs logic here
const Breadcrumbs = () => <Breadcrumb>{/* <BreadcrumbItem /> */}</Breadcrumb>;

// Put project-related nav items here
const navigationItems = () => null;

function App() {
  return (
    <Provider store={store}>
      <Shell navigationItems={navigationItems}>
        <BreadcrumbsTemplate breadcrumbs={<Breadcrumbs />}>
          <Routes />
        </BreadcrumbsTemplate>
      </Shell>
    </Provider>
  );
}

export default App;
