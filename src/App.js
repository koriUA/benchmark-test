import React from 'react';
import {
  BreadcrumbsTemplate,
  SideBarTemplate,
  Tabs,
  Tab,
  FullPageTemplate,
  NotFoundPage,
  Breadcrumb,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
 } from '@decibel/components';

const Breadcrumbs = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
  </Breadcrumb>
);

const tabsProps = () => ({
  className: 'some-class',
  selected: 0,
  triggerHref: '#',
  role: 'navigation',
  iconDescription: 'show menu options',
  tabContentClassName: 'tab-content',
});

const tabProps = () => ({
  disabled: false,
  href: '#',
  role: 'presentation',
  tabIndex: 0,
});

const SideBarHeaderWithTabs = () => {
  return (
    <Tabs {...tabsProps()}>
      <Tab {...tabProps()} label="Accordion" />
      <Tab {...tabProps()} label="Form" />
    </Tabs>
  );
};

const sidebarBody = <>
<p>Side bar title</p>
<Accordion style={{ padding: '20px 0' }}>
  <AccordionItem open={false} title="Section 1 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 2 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem
    title={
      <h4>
        Section 3 title (<em>the title can be a node</em>)
      </h4>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
</Accordion>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam blanditiis
  cupiditate dicta doloremque ducimus illum incidunt magnam maxime, modi praesentium quas
  qui quidem quis rem soluta voluptas voluptates voluptatum? Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Ipsum itaque nihil omnis quia soluta. Debitis ea eos esse
  harum ipsum iste odit placeat sunt! Deserunt eligendi eveniet explicabo fugiat ipsa.
</p>
</>;

function App() {
  return (
    <BreadcrumbsTemplate breadcrumbs={<Breadcrumbs />}>
      <SideBarTemplate
        sideBarBody={sidebarBody}
        sideBarHeader={<SideBarHeaderWithTabs />}
        show
      >
        <FullPageTemplate
          header='Acoustic Application'
          subheader='Welcome to the Acoustic Application!'
        >
          <NotFoundPage
              text={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, link suscipit a,
                  scelerisque sed, lacinia in, mi. Cras vel lorem. Lorem.
                </span>
              }
              title='Shoot! that page doesnt exist'
            />
        </FullPageTemplate>
      </SideBarTemplate>
    </BreadcrumbsTemplate>
  );
}

export default App;
