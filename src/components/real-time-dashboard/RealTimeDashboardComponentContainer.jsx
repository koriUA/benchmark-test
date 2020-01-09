import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerReducer, store } from '../../store/config';

import { onInput, realTimeDashboardRootSaga, realTimeDashboardReducer } from './ducks';
import RealTimeDashboardComponent from './RealTimeDashboardComponent';

// registering saga and reducer
store.sagaMiddleware.run(realTimeDashboardRootSaga);
registerReducer(realTimeDashboardReducer);

class RealTimeDashboardComponentContainer extends Component {
  componentDidMount() {
    const { onInput } = this.props;
    onInput('');
  }

  render() {
    return <RealTimeDashboardComponent {...this.props} />;
  }
}

RealTimeDashboardComponentContainer.propTypes = {
  onInput: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = {
  onInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(RealTimeDashboardComponentContainer);
