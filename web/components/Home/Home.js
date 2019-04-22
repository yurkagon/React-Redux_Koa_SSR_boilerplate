import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
  state => ({ data: state.home.data }),
  // (dispatch, props) => bindActionCreators({
  //   initialLoad: props.initialLoad
  // }, dispatch)
)
class Home extends Component {

  render() {
    const { data } = this.props;
    console.log(this.props)
    return (
      <div className="m-auto w-75">
        <h1
          className="text-center"
        >
          It is a home page
        </h1>
        <div>Some awesome home page with some awesome description like never before you havent seen</div>
        <Link to="/about">About</Link>
        <div>
          {data.map(({ id, title, body }) => (
            <div key={id}>
              <div>{title}</div>
              <div>{body}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home;
