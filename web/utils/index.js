import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { onlyBrowser } from '~/utils';

export const withInitialLoading = IncommingComponent => {
  const { initialLoad } = IncommingComponent;
  if (!initialLoad) {
    return IncommingComponent;
  }

  @withRouter
  class Wrapper extends Component {
    static initialLoad = initialLoad;

    componentDidMount() {
      this.load();
    }

    @onlyBrowser load = () => {
      const { match } = this.props;
      const { default: store } = require('~/web/store');

      initialLoad({
        store,
        match
      });
    }

    render() {
      return (
        <IncommingComponent load={this.load} {...this.props} />
      );
    }
  }

  return Wrapper;
}
