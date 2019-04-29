import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onlyBrowser } from '~/utils';

export const withInitialLoading = IncommingComponent => {
  const { initialLoad } = IncommingComponent;
  if (!initialLoad) {
    return IncommingComponent;
  }

  @connect()
  class Wrapper extends Component {
    static initialLoad = initialLoad;
    static isLoaded = false;

    @onlyBrowser componentDidMount() {
      if (!Wrapper.isLoaded) {
        this.load();

        Wrapper.isLoaded = true;
      };
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
