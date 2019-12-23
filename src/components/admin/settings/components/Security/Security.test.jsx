import React from 'react';
import { mount } from 'enzyme';

import Security from './Security';

describe('Security', () => {
  test('should render the Security', () => {
    const component = mount(<Security />);
    expect(component).toMatchSnapshot();
  });
});
