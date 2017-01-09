import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts} from '../actions/index';
import { Link } from 'react-router';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log("componentWillMount: " + this.props.posts);

  }
  renderPosts() {
    console.log("renderPosts array: ", this.props.posts);
    return this.props.posts.map((postData) => {
      return (
        <li className="list-group-item" key={postData.id}>
          <Link to={`/post/${postData.id}`}>{postData.title}</Link>
          <span className="pull-xs-right">{postData.categories}</span>
        </li>
      )
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/create-post" className="btn btn-primary">Create new post</Link>
        </div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


export default connect(mapStateToProps, { fetchPosts })(PostList);
