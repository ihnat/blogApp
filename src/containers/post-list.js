import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts} from '../actions/index';
import { Link } from 'react-router';

class PostList extends Component {
  componentWillMount() {
    console.log(this.props.fetchPosts());

  }
  renderPosts() {
    return [{title: 'Some titles', content: 'Content Content Content Content Content'}].map((postData) => {
      return (
        <div key={postData.title}>
          <h2>{postData.title}</h2>
          <p>{postData.content}</p>
        </div>
      )
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/create-post" className="btn btn-primary">Create new post</Link>
        </div>
        <div>
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostList);
