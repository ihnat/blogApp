import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class CreatePost extends Component {
  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props;
    // console.log(handleSubmit);
    // console.log(this.props.createPost);
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h2>Create new post:</h2>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea type="text" className="form-control" {...content}></textarea>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ createPost }, dispatch);
// }

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter title';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter title';
  }
  return errors
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(CreatePost);
