import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerReducer, store } from '../../redux/store';

import { showText } from './ducks/actions';
import {
  getExampleComponentText,
  citiesSelector,
  errorSelector,
  onInput,
  testSaga,
  testReducer,
} from './ducks';
import ExampleComponent from './ExampleComponent';

// registering saga and reducer
store.sagaMiddleware.run(testSaga);
registerReducer(testReducer);

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
