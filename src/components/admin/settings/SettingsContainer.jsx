import React from 'react';
import { FullPageTemplate, SideBarTemplate } from '@decibel/components';

import Content from './Content';
import Navigation from './Navigation';

const SettingsContainer = () => (
  <SideBarTemplate
    show
    showCloseButton={false}
    showSeparator={false}
    sideBarBody={<Navigation />}
    sideBarHeader="Settings"
  >
    <FullPageTemplate>
      <Content />
    </FullPageTemplate>
  </SideBarTemplate>
);

export default SettingsContainer;
