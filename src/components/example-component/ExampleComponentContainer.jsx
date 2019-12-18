import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showText } from './ducks/actions';
import { getExampleComponentText } from './ducks/selectors';
import ExampleComponent from './ExampleComponent';

class ExampleComponentContainer extends Component {
  componentDidMount() {
    // future
  }

  render() {
    return <ExampleComponent {...this.props} />;
  }
}

const mapStateToProps = (state /* , ownProps */) => ({
  text: getExampleComponentText(state),
});

const mapDispatchToProps = dispatch => ({
  showText: text => dispatch(showText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponentContainer);
