import React from 'react';
import { mount } from 'enzyme';

import Approvals from './Approvals';

describe('Approvals', () => {
  test('should render the Approvals', () => {
    const component = mount(<Approvals />);
    expect(component).toMatchSnapshot();
  });
});
