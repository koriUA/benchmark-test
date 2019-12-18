import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './ducks/selectors';

export const ExampleComponentContainer = ChildComponent  => {
  class HOComponent extends Component {
    componentDidMount() {
      // future fetchData
    }

    render() {
      return (
        <ChildComponent {...this.props} />
      );
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOComponent);
};
