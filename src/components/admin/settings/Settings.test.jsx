import React from 'react';
import { mount } from 'enzyme';
import { Route, MemoryRouter, Router } from 'react-router-dom';
import { TreeNavigation, TreeNavigationItem } from '@decibel/components';

import Content from './Content';
import Navigation from './Navigation';
import { ROUTES } from './routes';

const parentPath = '/parentPath';

describe('Content', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Content parentPath={parentPath} />
      </MemoryRouter>
    );
  });

  test('should render the Routes', () => {
    const routes = wrapper.find(Route);

    expect(routes.exists()).toBe(true);
    expect(routes.length).toBe(ROUTES.length);
  });

  test('should pass apropriate props to each Route', () => {
    const routes = wrapper.find(Route);

    ROUTES.forEach(({ path, component }, i) => {
      expect(routes.at(i).exists()).toBe(true);
      expect(routes.at(i).prop('path')).toEqual(`${parentPath}${path}`);
      expect(routes.at(i).prop('component')).toEqual(component);
    });
  });
});

describe('Navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Navigation parentPath={parentPath} />
      </MemoryRouter>
    );
  });

  test('should render TreeNavigation', () => {
    expect(wrapper.find(TreeNavigation).exists()).toBe(true);
  });

  test('should render TreeNavigationItems', () => {
    const treeNavigationItems = wrapper.find(TreeNavigationItem);

    ROUTES.forEach(({ name }, i) => {
      expect(treeNavigationItems.at(i).exists()).toBe(true);
      expect(treeNavigationItems.at(i).prop('label')).toEqual(name);
    });
  });

  test('should set selected prop to true on button click', () => {
    const treeNavigationItem = wrapper.find(TreeNavigationItem).at(1);

    expect(treeNavigationItem.prop('selected')).toBe(false);

    const button = treeNavigationItem.find('button');
    button.simulate('click');
    expect(
      wrapper
        .find(TreeNavigationItem)
        .at(1)
        .prop('selected')
    ).toBe(true);
  });

  test('should append pathname to the previous value on button click', () => {
    const treeNavigationItem = wrapper.find(TreeNavigationItem).at(2);
    const history = wrapper.find(Router).prop('history');

    const button = treeNavigationItem.find('button');
    button.simulate('click');

    expect(history.location.pathname).toBe(`${parentPath}${ROUTES[2].path}`);
  });
});
