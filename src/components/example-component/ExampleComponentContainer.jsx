import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showText } from './ducks/actions';
import { getExampleComponentText } from './ducks/selectors';
import { citiesSelector, errorSelector, onInput } from './alternative-reducer';
import ExampleComponent from './ExampleComponent';

class ExampleComponentContainer extends Component {
  componentDidMount() {
    const { onInput } = this.props;

    onInput('');
  }

  render() {
    return <ExampleComponent {...this.props} />;
  }
}

ExampleComponentContainer.propTypes = {
  onInput: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  text: getExampleComponentText(state),
  cityError: errorSelector(state),
  suggestedCities: citiesSelector(state),
});

const mapDispatchToProps = {
  onInput,
  showText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponentContainer);
