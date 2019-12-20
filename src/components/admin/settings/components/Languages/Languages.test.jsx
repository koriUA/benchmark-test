import React from 'react';
import { mount } from 'enzyme';

import Languages from './Languages';

describe('Languages', () => {
  test('should render the Languages', () => {
    const component = mount(<Languages />);
    expect(component).toMatchSnapshot();
  });
});
