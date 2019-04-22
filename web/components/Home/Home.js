import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withInitialLoading } from '~/web/utils';

@connect(state => ({ data: state.home.data }))
@withInitialLoading
class Home extends Component {

  componentDidMount() {
    const { data, initialLoad } = this.props;

    if(!data.length) {
      initialLoad();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div className="m-auto w-75">
        <h1
          className="text-center"
        >
          It is a home page
        </h1>
        <div>Some awesome home page with some awesome description like never before you havent seen</div>
        <Link to="/about">About</Link>
        <div className="list">
          {data.map(({ id, title, body }) => (
            <div key={id} className="item">
              <div className="title text-center mb-2">{title}</div>
              <div className="text">{body}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home;
