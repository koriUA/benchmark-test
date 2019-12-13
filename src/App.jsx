import React from 'react';
import { BreadcrumbsTemplate, Breadcrumb, BreadcrumbItem } from '@decibel/components';
import Shell from 'cui-react-shell';

const Breadcrumbs = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/#">Application 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Application 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Application 3</BreadcrumbItem>
  </Breadcrumb>
);

function App() {
  return (
    <BreadcrumbsTemplate breadcrumbs={<Breadcrumbs />}>
      <Shell />
    </BreadcrumbsTemplate>
  );
}

export default App;
