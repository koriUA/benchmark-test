import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Shell/i);
  expect(title).toBeInTheDocument();
});
