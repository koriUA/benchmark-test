import React from 'react';
import { mount } from 'enzyme';

import { store } from '../../redux/store';
import { performExampleRequest } from '../../services/example-request';
import { withStore } from '../../common/utilities/with-store';

import ExampleComponentContainer from './ExampleComponentContainer';

jest.mock('../../services/example-request', () => ({
  performExampleRequest: jest.fn(() => Promise.resolve()),
}));

describe('ExampleComponentContainer', () => {
  let ExampleComponentContainerWithStore;

  beforeEach(() => {
    performExampleRequest.mockImplementation(() => ['test']);
    ExampleComponentContainerWithStore = withStore(ExampleComponentContainer, store);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('text loaded correctly', () => {
    const wrapper = mount(<ExampleComponentContainerWithStore />);

    wrapper.find('button').prop('onClick')();

    expect(wrapper.find('[data-test="action-text"]').text()).toEqual(
      'Submit shown: Data submitted!'
    );
  });

  it('should handle text input', async () => {
    const wrapper = mount(<ExampleComponentContainerWithStore />);
    performExampleRequest.mockImplementation(() => ['test']);

    wrapper.find('input').prop('onChange')({ target: { value: 't' } });
    wrapper.find('input').prop('onChange')({ target: { value: 'to' } });

    await new Promise(r => setImmediate(r));

    expect(wrapper.find('[data-test="input-text"]').text()).toEqual('Suggested cities: test');
    // eslint-disable-next-line
    performExampleRequest.mockImplementation(() => Promise.reject('Not found'));

    jest.runAllTimers();

    await new Promise(r => setImmediate(r));
    wrapper.update();

    expect(wrapper.find('[data-test="error-text"]')).toHaveLength(1);
  });
});
