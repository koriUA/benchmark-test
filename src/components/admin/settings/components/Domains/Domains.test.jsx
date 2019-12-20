import React from 'react';
import { mount } from 'enzyme';

import Domains from './Domains';

describe('Content', () => {
  test('should render the Domains', () => {
    const component = mount(<Domains />);
    expect(component).toMatchSnapshot();
  });
});
