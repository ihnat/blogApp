import React, { Component } from 'react';

export default class Post extends Component {
  componentWillMount() {
    this.props.getPost();
  }
  render() {
    return (
      <div>Post {this.props.params.id}</div>
    );
  }
}
