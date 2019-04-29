import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { onlyBrowser } from '~/utils';

export const withInitialLoading = IncommingComponent => {
  const { initialLoad } = IncommingComponent;
  if (!initialLoad) {
    return IncommingComponent;
  }

  @connect()
  @withRouter
  class Wrapper extends Component {
    static initialLoad = initialLoad;

    componentDidMount() {
      console.log(this.props)
      this.load();
    }

    @onlyBrowser load = () => {
      const { dispatch } = this.props;

      initialLoad(dispatch);
    }

    render() {
      return (
        <IncommingComponent load={this.load} {...this.props} />
      );
    }
  }

  return Wrapper;
}
