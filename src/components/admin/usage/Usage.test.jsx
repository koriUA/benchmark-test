import React from 'react';
import { mount } from 'enzyme';

import Usage from './Usage';

describe('Usage', () => {
  test('it renders', () => {
    const component = mount(<Usage />);
    expect(component.find(Usage)).toHaveLength(1);
  });
});
