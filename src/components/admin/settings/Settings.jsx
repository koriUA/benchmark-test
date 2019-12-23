import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FullPageTemplate, SideBarTemplate } from '@decibel/components';

import Content from './Content';
import Navigation from './Navigation';

const Settings = () => {
  const { path: parentPath } = useRouteMatch();

  return (
    <SideBarTemplate
      show
      showCloseButton={false}
      showSeparator={false}
      sideBarBody={<Navigation parentPath={parentPath} />}
      sideBarHeader="Settings"
    >
      <FullPageTemplate>
        <Content parentPath={parentPath} />
      </FullPageTemplate>
    </SideBarTemplate>
  );
};

export default Settings;
