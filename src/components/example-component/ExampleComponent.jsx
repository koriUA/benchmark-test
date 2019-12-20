import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import flow from 'lodash/flow';
import property from 'lodash/property';

import './_example-component.scss';

const ExampleComponent = ({ text, showText, inputValue, inputError, onInput }) => (
  <div className="example-component-container">
    <input
      onChange={useCallback(flow([property(['target', 'value']), onInput]), [onInput])}
      type="text"
    />
    <button onClick={useCallback(() => showText('Lorem ipsum 123'), [showText])} type="button">
      Show Text
    </button>
    {inputError && <p data-test="error-text">{inputError}</p>}
    <p data-test="input-text">Text in input: {inputValue}</p>
    <p data-test="action-text">Text shown: {text}</p>
  </div>
);

ExampleComponent.propTypes = {
  inputError: PropTypes.string,
  inputValue: PropTypes.string,
  onInput: PropTypes.func,
  showText: PropTypes.func,
  text: PropTypes.string,
};

ExampleComponent.defaultProps = {
  inputError: '',
  inputValue: '',
  onInput: noop,
  showText: noop,
  text: '',
};

export default ExampleComponent;
