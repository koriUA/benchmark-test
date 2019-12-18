import React from 'react';
import PropTypes from 'prop-types';

import './_example-component.scss';

const ExampleComponent = ({ text, showText }) => (
  <div className="example-component-container">
    <button onClick={() => showText('Lorem ipsum 123')} type="button">
      Show Text
    </button>
    Text: {text}
  </div>
);

ExampleComponent.propTypes = {
  showText: PropTypes.func,
  text: PropTypes.string,
};

ExampleComponent.defaultProps = {
  showText: () => {},
  text: '',
};

export default ExampleComponent;
