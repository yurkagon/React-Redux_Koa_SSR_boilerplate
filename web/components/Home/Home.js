import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { withInitialLoading } from '~/web/utils';

import { fetchPosts } from '~/web/actions/home';

@withInitialLoading
@connect(state => ({ data: state.home.data }))
class Home extends Component {

  static initialLoad = ({ store, match }) => {
    console.log(match); // route params
    return store.dispatch(fetchPosts());
  };

  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;

    return (
      <div className="m-auto w-75">
        <Helmet>
          <title>Awesome page</title>
        </Helmet>
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
