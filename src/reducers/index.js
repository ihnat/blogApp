import { combineReducers } from 'redux';

import ReducerPosts from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

console.log('reducer index')
const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: formReducer
});

export default rootReducer;
