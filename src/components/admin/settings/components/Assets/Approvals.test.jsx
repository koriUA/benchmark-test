import React from 'react';
import { mount } from 'enzyme';

import Assets from './Assets';

describe('Assets', () => {
  test('should render the Assets', () => {
    const component = mount(<Assets />);
    expect(component).toMatchSnapshot();
  });
});
