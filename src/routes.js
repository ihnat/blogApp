import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostList from './containers/post-list';
import CreatePost from './containers/create-post';
import Post from './containers/post';
import reducers from './reducers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
    <Route path="create-post" component={CreatePost} />
    <Route path="post" component={Post} />
  </Route>
);
