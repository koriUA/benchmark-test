import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import flow from 'lodash/flow';
import property from 'lodash/property';

import './_example-component.scss';

const ExampleComponent = ({ text, showText, suggestedCities, cityError, onInput }) => (
  <div className="example-component-container">
    <input
      onChange={useCallback(flow([property(['target', 'value']), onInput]), [onInput])}
      type="text"
    />
    <button onClick={useCallback(() => showText('Data submitted!'), [showText])} type="button">
      Show Text
    </button>
    {cityError && <p data-test="error-text">{cityError}</p>}
    <p data-test="input-text">Suggested cities: {suggestedCities.join(', ')}</p>
    <p data-test="action-text">Submit shown: {text}</p>
  </div>
);

ExampleComponent.propTypes = {
  cityError: PropTypes.string,
  onInput: PropTypes.func,
  showText: PropTypes.func,
  suggestedCities: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
};

ExampleComponent.defaultProps = {
  cityError: '',
  onInput: noop,
  showText: noop,
  suggestedCities: [],
  text: '',
};

export default ExampleComponent;
