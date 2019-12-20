import React from 'react';
import { mount } from 'enzyme';

import General from './General';

describe('General', () => {
  test('should render the General', () => {
    const component = mount(<General />);
    expect(component).toMatchSnapshot();
  });
});
