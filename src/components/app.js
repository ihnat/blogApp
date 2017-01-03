import React, { Component } from 'react';

export default class PostList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>App:
        {this.props.children}
      </div>
    );
  }
}
