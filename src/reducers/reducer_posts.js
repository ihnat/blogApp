import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  activePost: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POSTS:
    console.log('reducer posts: case FETCH_POSTS');
    return { ...state, all: action.payload.data }
  case GET_POST:
    console.log('reducer posts: case GET_POST');
    return { ...state, activePost: action.payload.data }
  case DELETE_POST:
   console.log('reducer posts: case DELETE_POST');
   return state;
  default:
    return state;
  }
}
