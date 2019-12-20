import React from 'react';
import { Provider } from 'react-redux';

export function withStore(Component, store) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
