import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';

class Post extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }
  renderPost() {
    const { post } = this.props;
    if (post) {
      return (
        <div>
          <h2>{this.props.post.title}</h2>
          <small>{this.props.post.categories}</small>
          <p>{this.props.post.content}</p>
        </div>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
  deletePost() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }
  render() {
    return (
      <div>
        <Link to="/">Post list</Link>
        <Link to="/create-post">Create new post</Link>
        <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete post</button>
        Post {this.props.params.id}
        {this.renderPost()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.posts.activePost);
  return { post: state.posts.activePost };
}


export default connect(mapStateToProps, { getPost, deletePost })(Post);
