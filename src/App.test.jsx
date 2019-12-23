import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';

describe('App', () => {
  it('should render provider', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Provider)).toHaveLength(1);
  });
});
