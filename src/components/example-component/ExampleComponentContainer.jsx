import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showText } from './ducks/actions';
import { getExampleComponentText } from './ducks/selectors';
import { valueSelector, errorSelector, onInput } from './alternative-reducer';
import ExampleComponent from './ExampleComponent';

class ExampleComponentContainer extends Component {
  componentDidMount() {
    // future
  }

  render() {
    return <ExampleComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  text: getExampleComponentText(state),
  inputValue: valueSelector(state),
  inputError: errorSelector(state),
});

const mapDispatchToProps = {
  onInput,
  showText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponentContainer);
