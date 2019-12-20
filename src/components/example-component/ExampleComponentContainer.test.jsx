import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { store } from '../../redux/store';

import ExampleComponentContainer from './ExampleComponentContainer';

jest.mock('../../redux/store', () => {
  const actualStore = require.requireActual('../../redux/store');

  return {
    ...actualStore,
    store: actualStore.createStore({
      reducers: actualStore.reducers,
      middlewareConfiguration: { loggerConfig: { predicate: () => false } },
    }),
  };
});

function withStore(Component, store) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

describe('ExampleComponentContainer', () => {
  let ExampleComponentContainerWithStore;

  beforeEach(() => {
    ExampleComponentContainerWithStore = withStore(ExampleComponentContainer, store);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('text loaded correctly', () => {
    const wrapper = mount(<ExampleComponentContainerWithStore />);

    wrapper.find('button').prop('onClick')();

    expect(wrapper.find('[data-test="action-text"]').text()).toEqual('Text shown: Lorem ipsum 123');
  });

  it('should handle text input', async () => {
    const wrapper = mount(<ExampleComponentContainerWithStore />);

    wrapper.find('input').prop('onChange')({ target: { value: 'text' } });
    wrapper.find('input').prop('onChange')({ target: { value: 'text 2' } });

    expect(wrapper.find('[data-test="input-text"]').text()).toEqual('Text in input: text');

    jest.runAllTimers();

    await new Promise(r => setImmediate(r));
    wrapper.update();

    expect(wrapper.find('[data-test="error-text"]')).toHaveLength(1);
  });
});
