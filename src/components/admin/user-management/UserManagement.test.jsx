import React from 'react';
import { mount } from 'enzyme';

import UserManagement from './UserManagement';

describe('UserManagement', () => {
  test('it renders', () => {
    const component = mount(<UserManagement />);
    expect(component.find(UserManagement)).toHaveLength(1);
  });
});
